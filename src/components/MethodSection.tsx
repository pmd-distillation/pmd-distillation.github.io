import { useEffect, useRef, useState } from 'react';
import { methodChapters, methodMedia } from '../data/method';
import { assetUrl } from '../data/assetUrl';

function formatTime(seconds: number) {
  const total = Math.max(0, Math.floor(seconds));
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`;
}

// `intro` renders the film in the teaser's slot at the top of the page: no heading, sized to the first screen.
export function MethodSection({ intro = false }: { intro?: boolean }) {
  const video = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const totalTime = duration || methodMedia.duration;
  const ends = methodChapters.map((_, index) => methodChapters[index + 1]?.start ?? totalTime);
  const activeIndex = methodChapters.reduce((active, chapter, index) => currentTime >= chapter.start ? index : active, 0);
  const chapterFraction = (index: number) =>
    Math.min(1, Math.max(0, (currentTime - methodChapters[index].start) / (ends[index] - methodChapters[index].start)));
  // The track draws every chapter at equal width, so the scrubber works in chapter units: index + fraction.
  const position = activeIndex + chapterFraction(activeIndex);
  const timeAt = (value: number) => {
    const index = Math.min(methodChapters.length - 1, Math.floor(value));
    return methodChapters[index].start + (value - index) * (ends[index] - methodChapters[index].start);
  };

  // Play while the film is on screen, unless the viewer paused it, it already finished, or motion is reduced.
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!reduced && !userPaused.current && !element.ended) void element.play().catch(() => undefined);
      } else if (!element.paused) {
        element.pause();
      }
    }, { threshold: 0.4 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  function syncProgress() {
    const element = video.current;
    if (!element) return;
    setCurrentTime(element.currentTime);
    if (Number.isFinite(element.duration) && element.duration > 0) setDuration(element.duration);
  }

  function togglePlayback() {
    const element = video.current;
    if (!element) return;
    if (element.paused) {
      userPaused.current = false;
      void element.play().catch(() => setPlaying(!element.paused));
    } else {
      userPaused.current = true;
      element.pause();
    }
  }

  function seekTo(seconds: number, play = false) {
    const element = video.current;
    if (!element) return;
    element.currentTime = Math.max(0, Math.min(seconds, totalTime - 0.05));
    setCurrentTime(element.currentTime);
    setEnded(false);
    if (play) {
      userPaused.current = false;
      void element.play().catch(() => undefined);
    }
  }

  const playLabel = playing ? 'Pause method video' : ended ? 'Replay method video' : 'Play method video';

  return (
    <section className={intro ? 'teaser method-intro container' : 'method-section container'} id="method"
      {...(intro ? { 'aria-label': 'Method' } : { 'aria-labelledby': 'method-title' })}>
      {!intro && (
        <div className="section-heading comparison-heading">
          <h2 id="method-title">Method</h2>
        </div>
      )}
      <div className={intro ? 'teaser-stage' : 'method-stage'}>
        <video ref={video} id="pmd-method" className={intro ? 'teaser-video' : 'method-video'} muted playsInline preload="metadata"
          width={methodMedia.width} height={methodMedia.height} poster={assetUrl(methodMedia.poster)}
          onClick={togglePlayback} onLoadedMetadata={syncProgress} onDurationChange={syncProgress}
          onTimeUpdate={syncProgress} onSeeked={syncProgress}
          onPlay={() => { setPlaying(true); setEnded(false); }}
          onPause={() => { setPlaying(false); syncProgress(); }}
          onEnded={() => { setEnded(true); syncProgress(); }}
          aria-label="Posterior Matching Distillation method explainer">
          <source src={assetUrl(methodMedia.src)} type="video/mp4" />
          <a href={assetUrl(methodMedia.src)}>Download the PMD method video.</a>
        </video>
      </div>
      <div className="method-transport" role="group" aria-label="Method video playback controls">
        <div className="teaser-progress method-progress">
          <div className="method-tracks" aria-hidden="true">
            {methodChapters.map((chapter, index) => (
              <span key={chapter.id}><span style={{ transform: `scaleX(${chapterFraction(index)})` }} /></span>
            ))}
          </div>
          <input type="range" min="0" max={methodChapters.length} step="0.001" value={position}
            onChange={event => seekTo(timeAt(Number(event.currentTarget.value)))}
            aria-label="Method video playback position" aria-controls="pmd-method"
            aria-valuetext={`${methodChapters[activeIndex].title}, ${formatTime(currentTime)} of ${formatTime(totalTime)}`} />
        </div>
        <ol className="method-chapters" aria-label="Method chapters">
          {methodChapters.map((chapter, index) => (
            <li key={chapter.id}>
              <button type="button" onClick={() => seekTo(chapter.start, true)} aria-current={index === activeIndex ? 'step' : undefined}
                aria-controls="pmd-method">
                {chapter.title}
              </button>
            </li>
          ))}
        </ol>
        <div className="teaser-transport-meta">
          <button type="button" className="teaser-play-button" onClick={togglePlayback} aria-label={playLabel} aria-controls="pmd-method">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              {playing ? <><rect x="8" y="6" width="3" height="12" rx=".7" /><rect x="14" y="6" width="3" height="12" rx=".7" /></>
                : ended ? <path d="M12 5V1.5L7 6l5 4.5V7a6 6 0 1 1-6 6H4a8 8 0 1 0 8-8Z" />
                : <path d="m9 6.5 8 5.5-8 5.5Z" />}
            </svg>
          </button>
          <span className="teaser-time"><span>{formatTime(currentTime)}</span><span className="teaser-time-divider">/</span><span>{formatTime(totalTime)}</span></span>
        </div>
      </div>
    </section>
  );
}
