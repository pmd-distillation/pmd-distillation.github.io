import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, KeyboardEvent } from 'react';
import { formatIndex, nextPromptIndex } from '../data/gallery';
import { assetUrl } from '../data/assetUrl';
import { defaultVideoCompetitor, videoCompetitors, videoPrompts, videoSampleCount, videoSource } from '../data/videos';
import type { VideoCompetitor } from '../data/videos';
import { ArrowIcon, VideoIcon } from './Icons';

const samples = Array.from({ length: videoSampleCount }, (_, index) => index);

function ComparisonVideo({ src, label }: { src?: string; label: string }) {
  const [failed, setFailed] = useState<string>();
  const video = useRef<HTMLVideoElement>(null);

  // Play only while on screen; honour reduced motion by leaving clips paused on their first frame.
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !reduced) element.play().catch(() => undefined);
      else element.pause();
    }, { threshold: 0.25 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [src]);

  const playable = Boolean(src && failed !== src);
  return (
    <div className="media-frame video-frame" data-placeholder={!playable || undefined}>
      {playable ? (
        <video ref={video} key={src} src={assetUrl(src)} aria-label={label} muted loop playsInline preload="metadata"
          onError={() => setFailed(src)} />
      ) : (
        <span className="placeholder-content" role="img" aria-label={`${label} — video placeholder`}><VideoIcon /></span>
      )}
    </div>
  );
}

export function VideoComparisonGallery() {
  const [promptIndex, setPromptIndex] = useState(0);
  const [competitor, setCompetitor] = useState(defaultVideoCompetitor);
  const [activeSample, setActiveSample] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const gallery = useRef<HTMLDivElement>(null);
  const prompt = videoPrompts[promptIndex];
  const availability = competitor.folder ? '' : `${competitor.label} videos forthcoming`;

  function resetSample() {
    setActiveSample(0);
    gallery.current?.scrollTo({ left: 0, behavior: 'instant' });
  }

  function changeCompetitor(value: VideoCompetitor) {
    setCompetitor(value);
    resetSample();
  }

  function onTabKeyDown(event: KeyboardEvent, index: number) {
    const count = videoCompetitors.length;
    let next: number;
    if (event.key === 'ArrowRight') next = (index + 1) % count;
    else if (event.key === 'ArrowLeft') next = (index - 1 + count) % count;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = count - 1;
    else return;
    event.preventDefault();
    changeCompetitor(videoCompetitors[next]);
    tabs.current[next]?.focus();
  }

  function navigate(direction: -1 | 1) {
    setPromptIndex(index => nextPromptIndex(index, direction, videoPrompts.length));
    resetSample();
  }

  function selectSample(index: number) {
    const target = gallery.current?.querySelectorAll<HTMLElement>('.sample-pair')[index];
    if (target && gallery.current) {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      gallery.current.scrollTo({ left: target.offsetLeft - gallery.current.offsetLeft, behavior: reduced ? 'instant' : 'smooth' });
    }
  }

  function trackSample() {
    const element = gallery.current;
    if (!element || element.scrollWidth <= element.clientWidth) return;
    const pairs = Array.from(element.querySelectorAll<HTMLElement>('.sample-pair'));
    const left = element.getBoundingClientRect().left + parseFloat(getComputedStyle(element).paddingLeft);
    const closest = pairs.reduce((best, pair, index) => {
      const distance = Math.abs(pair.getBoundingClientRect().left - left);
      return distance < best.distance ? { index, distance } : best;
    }, { index: 0, distance: Infinity });
    setActiveSample(closest.index);
  }

  return (
    <section className="comparison-section video-comparison container" id="video-gallery" aria-labelledby="video-generation-title">
      <div className="section-heading comparison-heading">
        <h2 id="video-generation-title">Video Generation</h2>
      </div>
      <div className="competitor-tabs" role="tablist" aria-label="Choose video competitor">
        {videoCompetitors.map((item, index) => (
          <button key={item.id} id={`video-competitor-tab-${item.id}`} ref={element => { tabs.current[index] = element; }}
            type="button" role="tab" aria-selected={competitor.id === item.id} aria-controls="video-comparison-panel"
            tabIndex={competitor.id === item.id ? 0 : -1} onClick={() => changeCompetitor(item)} onKeyDown={event => onTabKeyDown(event, index)}>
            {item.label}
          </button>
        ))}
      </div>
      <div id="video-comparison-panel" role="tabpanel" aria-labelledby={`video-competitor-tab-${competitor.id}`}>
        <div className="comparison-stage">
          <div className="comparison-method-labels">
            <div className="comparison-row-label competitor-row"><span>{competitor.rowLabel}</span>{competitor.detail && <span>{competitor.detail}</span>}</div>
            <div className="comparison-row-label pmd-row"><strong>PMD</strong><span>Ours</span></div>
          </div>
          <div className="comparison-batch-viewport">
            <div className="comparison-grid" ref={gallery} onScroll={trackSample}
              aria-label={`Prompt ${prompt.id}, ${competitor.label} versus PMD videos`}>
              {samples.map(index => (
                <div className="sample-pair" key={index} style={{ '--column': index + 1 } as CSSProperties}>
                  {(['competitor', 'pmd'] as const).map(method => (
                    <div className={`comparison-cell ${method}-cell`} key={method}>
                      <span className="mobile-method-label">
                        <span>{method === 'pmd' ? 'PMD' : competitor.rowLabel}</span>
                        {method === 'pmd' ? <span>Ours</span> : competitor.detail && <span>· {competitor.detail}</span>}
                      </span>
                      <ComparisonVideo src={videoSource(prompt, competitor, method, index)}
                        label={`${method === 'pmd' ? 'PMD' : competitor.label}, ${prompt.summary}, sample ${formatIndex(index + 1)}`} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mobile-sample-controls">
          <div aria-label="Choose video sample">{samples.map(index => <button type="button" key={index} onClick={() => selectSample(index)}
            aria-label={`Show sample ${formatIndex(index + 1)}`} aria-pressed={activeSample === index}><span /></button>)}</div>
        </div>
        <div className="comparison-prompt">
          <div className="prompt-copy" id="video-comparison-prompt"><span className="prompt-label">Prompt {prompt.id}</span><span className="prompt-dash" aria-hidden="true">—</span><p>{prompt.full}</p></div>
        </div>
        <div className="comparison-footer">
          <span className="placeholder-note">{availability}</span>
          <div className="pagination" aria-label="Video prompt pagination">
            <button type="button" onClick={() => navigate(-1)} aria-label="Previous video prompt"><ArrowIcon direction="left" /></button>
            <span className="page-count" role="status" aria-live="polite" aria-atomic="true">{formatIndex(promptIndex + 1)} <span>of {videoPrompts.length}</span></span>
            <button type="button" onClick={() => navigate(1)} aria-label="Next video prompt"><ArrowIcon /></button>
          </div>
          <span className="comparison-footer-spacer" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
