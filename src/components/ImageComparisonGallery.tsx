import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { prompts } from '../data/prompts';
import { formatIndex, nextPromptIndex } from '../data/gallery';
import { defaultFamily, families } from '../data/families';
import type { FamilyCompetitor, FamilyId } from '../data/families';
import { ArrowIcon, PlusIcon } from './Icons';
import { CompetitorTabs } from './CompetitorTabs';
import { FamilySwitch } from './FamilySwitch';
import { ImageComparisonBatch } from './ImageComparisonBatch';
import { BatchNavigationButton } from './BatchNavigationButton';

const batchTransitionMs = 360;

export function ImageComparisonGallery() {
  const [promptIndex, setPromptIndex] = useState(0);
  const [familyId, setFamilyId] = useState<FamilyId>(defaultFamily.id);
  const family = families.find(item => item.id === familyId) ?? defaultFamily;
  const [competitor, setCompetitor] = useState<FamilyCompetitor>(defaultFamily.defaultCompetitor);
  const [expanded, setExpanded] = useState(false);
  const [activeSample, setActiveSample] = useState(0);
  const [batchIndex, setBatchIndex] = useState(0);
  const [batchDirection, setBatchDirection] = useState<-1 | 1>(1);
  const [outgoingBatch, setOutgoingBatch] = useState<number | null>(null);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const outgoingScrollLeft = useRef(0);
  const gallery = useRef<HTMLDivElement>(null);
  const prompt = { ...prompts[promptIndex], ...family.promptText?.[prompts[promptIndex].id] };
  const expandable = prompt.full !== prompt.summary;
  const samples = family.samples;
  const batchCount = Math.max(1, Math.floor(family.sampleCount(prompt.id, competitor.id) / samples.length));
  const offset = batchIndex * samples.length;
  const competitorCount = samples.filter((_, index) => family.source(prompt.id, competitor.id, 'competitor', offset + index)).length;
  const pmdCount = samples.filter((_, index) => family.source(prompt.id, competitor.id, 'pmd', offset + index)).length;
  const availability = competitorCount === samples.length && pmdCount === samples.length ? '' :
    competitorCount === 0 && pmdCount === samples.length ? 'Competitor images forthcoming' :
    competitorCount === samples.length && pmdCount === 0 ? 'PMD images forthcoming' :
    competitorCount === 0 && pmdCount === 0 ? 'Placeholder results' : 'Some images forthcoming';

  useEffect(() => () => clearTimeout(transitionTimer.current), []);

  useEffect(() => {
    if (batchCount < 2) return;
    const nextOffset = ((batchIndex + 1) % batchCount) * samples.length;
    for (const method of ['competitor', 'pmd'] as const) {
      for (let index = 0; index < samples.length; index++) {
        const source = family.source(prompt.id, competitor.id, method, nextOffset + index);
        if (source) {
          const image = new Image();
          image.decoding = 'async';
          image.src = source;
        }
      }
    }
  }, [family, samples, prompt.id, competitor.id, batchIndex, batchCount]);

  function resetSample() {
    setActiveSample(0);
    gallery.current?.scrollTo({ left: 0, behavior: 'instant' });
  }

  function changeCompetitor(value: FamilyCompetitor) {
    setCompetitor(value);
    resetImages();
  }

  function changeFamily(value: FamilyId) {
    const next = families.find(item => item.id === value) ?? defaultFamily;
    setFamilyId(next.id);
    setCompetitor(next.defaultCompetitor);
    resetImages();
  }

  function resetImages() {
    clearTimeout(transitionTimer.current);
    setOutgoingBatch(null);
    setBatchIndex(0);
    resetSample();
  }

  function changeImageBatch(direction: -1 | 1) {
    if (batchCount < 2 || outgoingBatch !== null) return;
    const next = (batchIndex + direction + batchCount) % batchCount;
    setBatchDirection(direction);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reducedMotion) {
      outgoingScrollLeft.current = gallery.current?.scrollLeft ?? 0;
      setOutgoingBatch(batchIndex);
      transitionTimer.current = setTimeout(() => setOutgoingBatch(null), batchTransitionMs + 50);
    }
    setBatchIndex(next);
    resetSample();
  }

  function navigate(direction: -1 | 1) {
    setPromptIndex(index => nextPromptIndex(index, direction, prompts.length));
    setExpanded(false);
    resetImages();
  }

  function selectSample(index: number) {
    const target = gallery.current?.querySelectorAll<HTMLElement>('.sample-pair')[index];
    if (target && gallery.current) {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      gallery.current.scrollTo({ left: target.offsetLeft - gallery.current.offsetLeft, behavior: reducedMotion ? 'instant' : 'smooth' });
    }
  }

  function trackSample() {
    const element = gallery.current;
    if (!element || element.scrollWidth <= element.clientWidth) return;
    const pairs = Array.from(element.querySelectorAll<HTMLElement>('.sample-pair'));
    const closest = pairs.reduce((best, pair, index) => {
      const distance = Math.abs(pair.getBoundingClientRect().left - element.getBoundingClientRect().left - parseFloat(getComputedStyle(element).paddingLeft));
      return distance < best.distance ? { index, distance } : best;
    }, { index: 0, distance: Infinity });
    setActiveSample(closest.index);
  }

  return (
    <section className="comparison-section container" id="gallery" aria-labelledby="generation-title">
      <div className="section-heading comparison-heading">
        <h2 id="generation-title">Image Generation</h2>
        <FamilySwitch value={family.id} onChange={changeFamily} />
      </div>
      <CompetitorTabs items={family.competitors} value={competitor.id} onChange={changeCompetitor} />
      <div id="comparison-panel" role="tabpanel" aria-labelledby={`competitor-tab-${competitor.id}`}>
      <div className="comparison-stage">
        <div className="comparison-method-labels">
          <div className="comparison-row-label competitor-row"><span>{competitor.rowLabel}</span>{competitor.detail && <span>{competitor.detail}</span>}</div>
          <div className="comparison-row-label pmd-row"><strong>PMD</strong><span>Ours</span></div>
        </div>
        <div className="comparison-batch-viewport" data-image-batch={batchIndex + 1} style={{
          '--batch-duration': `${batchTransitionMs}ms`,
          '--batch-enter-x': batchDirection === 1 ? '100%' : '-100%',
          '--batch-exit-x': batchDirection === 1 ? '-100%' : '100%',
        } as CSSProperties}>
          <ImageComparisonBatch key={`current-${batchIndex}`} family={family} prompt={prompt} competitor={competitor} batchIndex={batchIndex}
            galleryRef={gallery} onScroll={trackSample} className={outgoingBatch !== null ? 'batch-entering' : ''} />
          {outgoingBatch !== null && <ImageComparisonBatch key={`outgoing-${outgoingBatch}`} family={family} prompt={prompt} competitor={competitor}
            batchIndex={outgoingBatch} outgoing className="batch-outgoing"
            galleryRef={element => { if (element) element.scrollLeft = outgoingScrollLeft.current; }} />}
        </div>
        {batchCount > 1 && <BatchNavigationButton direction={1}
          className="batch-navigation-desktop" onNavigate={changeImageBatch} disabled={outgoingBatch !== null} />}
      </div>
      <div className="mobile-sample-controls">
        <div aria-label="Choose comparison sample">{samples.map((sample, index) => <button type="button" key={sample} onClick={() => selectSample(index)} aria-label={`Show sample ${formatIndex(sample)}`} aria-pressed={activeSample === index}><span /></button>)}</div>
        {batchCount > 1 && <BatchNavigationButton direction={1}
          className="batch-navigation-mobile" onNavigate={changeImageBatch} disabled={outgoingBatch !== null} />}
      </div>
      <div className="comparison-prompt">
        <div className="prompt-copy" id="comparison-prompt"><span className="prompt-label">Prompt {formatIndex(promptIndex + 1)}</span><span className="prompt-dash" aria-hidden="true">—</span><p>{expanded ? prompt.full : prompt.summary}</p></div>
        {expandable && <button type="button" className="expand-prompt" aria-controls="comparison-prompt" aria-expanded={expanded} aria-label={expanded ? 'Collapse prompt' : 'Expand full prompt'} onClick={() => setExpanded(value => !value)}><PlusIcon /></button>}
      </div>
      <div className="comparison-footer">
        <span className="placeholder-note">{availability}</span>
        <div className="pagination" aria-label="Prompt pagination">
          <button type="button" onClick={() => navigate(-1)} aria-label="Previous prompt"><ArrowIcon direction="left" /></button>
          <span className="page-count" role="status" aria-live="polite" aria-atomic="true">{formatIndex(promptIndex + 1)} <span>of {prompts.length}</span></span>
          <button type="button" onClick={() => navigate(1)} aria-label="Next prompt"><ArrowIcon /></button>
        </div>
        <span className="comparison-footer-spacer" aria-hidden="true" />
      </div>
      <span className="sr-only" role="status" aria-live="polite">Comparing {competitor.label} and PMD on {family.label}. {samples.length} images per model. Image batch {batchIndex + 1} of {batchCount}.{availability && ` ${availability}.`}</span>
      </div>
    </section>
  );
}
