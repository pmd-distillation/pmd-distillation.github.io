import { useRef } from 'react';
import type { KeyboardEvent } from 'react';
import type { FamilyCompetitor } from '../data/families';

type Props = { items: readonly FamilyCompetitor[]; value: string; onChange: (competitor: FamilyCompetitor) => void };

export function CompetitorTabs({ items, value, onChange }: Props) {
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: KeyboardEvent, index: number) {
    let next: number;
    if (event.key === 'ArrowRight') next = (index + 1) % items.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + items.length) % items.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = items.length - 1;
    else return;
    event.preventDefault();
    onChange(items[next]);
    buttons.current[next]?.focus();
  }

  return (
    <div className="competitor-tabs" role="tablist" aria-label="Choose competitor">
      {items.map((competitor, index) => (
        <button key={competitor.id} id={`competitor-tab-${competitor.id}`} ref={element => { buttons.current[index] = element; }}
          type="button" role="tab" aria-selected={value === competitor.id} aria-controls="comparison-panel"
          tabIndex={value === competitor.id ? 0 : -1} onClick={() => onChange(competitor)} onKeyDown={event => onKeyDown(event, index)}>
          {competitor.label}
        </button>
      ))}
    </div>
  );
}
