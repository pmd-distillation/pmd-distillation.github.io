import { useRef } from 'react';
import type { KeyboardEvent } from 'react';
import { samplingBudgets } from '../data/gallery';
import type { NFE } from '../data/gallery';

export function NFESelector({ value, onChange }: { value: NFE; onChange: (value: NFE) => void }) {
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  function onKeyDown(event: KeyboardEvent, index: number) {
    let next: number;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % samplingBudgets.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + samplingBudgets.length) % samplingBudgets.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = samplingBudgets.length - 1;
    else return;
    event.preventDefault();
    onChange(samplingBudgets[next]);
    buttons.current[next]?.focus();
  }
  return (
    <div className="nfe-selector">
      <span id="nfe-label">Sampling budget <abbr title="Number of function evaluations">NFE</abbr></span>
      <div className="nfe-options" role="radiogroup" aria-labelledby="nfe-label">
        {samplingBudgets.map((nfe, index) => (
          <button key={nfe} ref={element => { buttons.current[index] = element; }} type="button" role="radio" aria-checked={value === nfe}
            aria-label={`${nfe} NFE`} tabIndex={value === nfe ? 0 : -1} onClick={() => onChange(nfe)} onKeyDown={event => onKeyDown(event, index)}>{nfe}</button>
        ))}
      </div>
    </div>
  );
}
