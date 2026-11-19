import { useEffect, useRef, useState } from 'react';
import { citation } from '../data/paper';
import { CheckIcon, CopyIcon, PlusIcon } from './Icons';

export function Citation({ open, onOpenChange }: { open: boolean; onOpenChange: (value: boolean) => void }) {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(resetTimer.current), []);

  async function copyCitation() {
    let copied = false;
    try { await navigator.clipboard.writeText(citation); copied = true; } catch {
      const focused = document.activeElement;
      const textarea = document.createElement('textarea');
      textarea.value = citation;
      textarea.setAttribute('readonly', '');
      textarea.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
      document.body.append(textarea);
      textarea.select();
      try { copied = document.execCommand('copy'); } catch { /* Selection remains available below. */ }
      textarea.remove();
      if (focused instanceof HTMLElement) focused.focus({ preventScroll: true });
    }
    setCopyState(copied ? 'copied' : 'error');
    clearTimeout(resetTimer.current);
    if (copied) resetTimer.current = setTimeout(() => setCopyState('idle'), 2500);
  }

  return (
    <section className="citation-section container" id="paper" aria-label="Paper citation">
      <details open={open} onToggle={event => onOpenChange(event.currentTarget.open)}>
        <summary><span>Citation <span className="citation-format">BibTeX</span></span><PlusIcon className="citation-toggle" /></summary>
        <div className="citation-content">
          <div className="citation-toolbar"><span>Bibliographic details forthcoming.</span><button type="button" className="copy-button" onClick={copyCitation}>{copyState === 'copied' ? <CheckIcon /> : <CopyIcon />}{copyState === 'copied' ? 'Copied' : 'Copy BibTeX'}</button></div>
          <pre><code>{citation}</code></pre>
          <span className="copy-status" role="status">{copyState === 'error' ? 'Please select and copy the citation above.' : copyState === 'copied' ? 'Citation copied to clipboard.' : ''}</span>
        </div>
      </details>
    </section>
  );
}
