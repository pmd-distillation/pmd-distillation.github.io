import { useEffect, useRef, useState } from 'react';
import { teaserMedia } from '../data/media';
import { assetUrl } from '../data/assetUrl';

function formatTime(seconds: number) {
  const total = Math.max(0, Math.floor(seconds));
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`;
}

export function TeaserVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const totalTime = duration || teaserMedia.duration;
  const progress = Math.min(1, Math.max(0, currentTime / totalTime));

  useEffect(() => {
    const element = video.current;
    if (element && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      void element.play().catch(() => undefined);
    }
    return () => {
      element?.pause();
    };
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
      void element.play().catch(() => setPlaying(!element.paused));
    } else {
      element.pause();
    }
  }

  function seekTo(seconds: number) {
    const element = video.current;
    if (!element || !duration) return;
    element.currentTime = Math.max(0, Math.min(seconds, duration));
    setCurrentTime(element.currentTime);
  }

  return (
    <section className="teaser container" aria-label="Project teaser">
      <div className="teaser-stage">
        <video ref={video} id="pmd-teaser" className="teaser-video" muted loop playsInline preload="metadata"
          width={teaserMedia.width} height={teaserMedia.height} poster={assetUrl(teaserMedia.poster)}
          onClick={togglePlayback} onLoadedMetadata={syncProgress} onDurationChange={syncProgress}
          onTimeUpdate={syncProgress} onSeeked={syncProgress}
          onPlay={() => { setPlaying(true); setHasPlayed(true); }}
          onPause={() => { setPlaying(false); syncProgress(); }}
          aria-label="Posterior Matching Distillation teaser">
          <source src={assetUrl(teaserMedia.src)} type="video/mp4" />
          <a href={assetUrl(teaserMedia.src)}>Download the PMD teaser.</a>
        </video>
      </div>
      <div className="teaser-transport" role="group" aria-label="Teaser playback controls">
        <div className="teaser-progress">
          <span className="teaser-progress-track" aria-hidden="true">
            <span style={{ transform: `scaleX(${progress})` }} />
          </span>
          <input type="range" min="0" max={totalTime} step="0.1"
            value={Math.min(currentTime, totalTime)} disabled={!duration}
            onChange={event => seekTo(Number(event.currentTarget.value))}
            aria-label="Teaser playback position" aria-controls="pmd-teaser"
            aria-valuetext={`${formatTime(currentTime)} of ${formatTime(totalTime)}`} />
        </div>
        <div className="teaser-transport-meta">
          <button type="button" className="teaser-play-button" onClick={togglePlayback}
            aria-label={playing ? 'Pause teaser' : hasPlayed ? 'Resume teaser' : 'Play teaser'} aria-controls="pmd-teaser">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              {playing ? <><rect x="8" y="6" width="3" height="12" rx=".7" /><rect x="14" y="6" width="3" height="12" rx=".7" /></> : <path d="m9 6.5 8 5.5-8 5.5Z" />}
            </svg>
          </button>
          <span className="teaser-time"><span>{formatTime(currentTime)}</span><span className="teaser-time-divider">/</span><span>{formatTime(totalTime)}</span></span>
        </div>
      </div>
    </section>
  );
}
