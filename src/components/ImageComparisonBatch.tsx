import type { CSSProperties, Ref, UIEventHandler } from 'react';
import type { FamilyCompetitor, ModelFamily } from '../data/families';
import { formatIndex } from '../data/gallery';
import type { Prompt } from '../data/prompts';
import { MediaPlaceholder } from './MediaPlaceholder';

type Props = {
  family: ModelFamily;
  prompt: Prompt;
  competitor: FamilyCompetitor;
  batchIndex: number;
  className?: string;
  galleryRef?: Ref<HTMLDivElement>;
  onScroll?: UIEventHandler<HTMLDivElement>;
  outgoing?: boolean;
};

export function ImageComparisonBatch({ family, prompt, competitor, batchIndex, className = '', galleryRef, onScroll, outgoing = false }: Props) {
  const offset = batchIndex * family.samples.length;
  return (
    <div className={`comparison-grid ${className}`} ref={galleryRef} onScroll={onScroll}
      style={{ '--columns': family.samples.length } as CSSProperties}
      aria-hidden={outgoing || undefined} inert={outgoing || undefined}
      aria-label={`${prompt.summary}, ${competitor.label} versus PMD on ${family.label}, image batch ${batchIndex + 1}`}>
      {family.samples.map((sample, index) => (
        <div className="sample-pair" key={sample} style={{ '--column': index + 1 } as CSSProperties}>
          {(['competitor', 'pmd'] as const).map(method => (
            <div className={`comparison-cell ${method}-cell`} key={method}>
              <span className="mobile-method-label">
                <span>{method === 'pmd' ? 'PMD' : competitor.rowLabel}</span>
                {method === 'pmd' ? <span>Ours</span> : competitor.detail && <span>· {competitor.detail}</span>}
              </span>
              <MediaPlaceholder eager src={family.source(prompt.id, competitor.id, method, offset + index)}
                alt={`${method === 'pmd' ? 'PMD' : competitor.label}, ${prompt.summary}, sample ${formatIndex(offset + sample)}`} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
