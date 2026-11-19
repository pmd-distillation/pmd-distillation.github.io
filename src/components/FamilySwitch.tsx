import type { CSSProperties } from 'react';
import { families } from '../data/families';
import type { FamilyId } from '../data/families';

// A black rectangular switch with one button per base-model family. Clicking a family selects it (clicking the
// active one does nothing). A white thumb slides under the chosen family, whose label turns black and bold with a dot.
export function FamilySwitch({ value, onChange }: { value: FamilyId; onChange: (family: FamilyId) => void }) {
  const index = families.findIndex(family => family.id === value);
  return (
    <div className="family-switch" role="group" aria-label="Base model"
      style={{ '--active-index': index, '--option-count': families.length } as CSSProperties}>
      <span className="family-switch-thumb" aria-hidden="true" />
      {families.map(family => (
        <button key={family.id} type="button" className="family-switch-option" data-active={family.id === value || undefined}
          aria-pressed={family.id === value} onClick={() => { if (family.id !== value) onChange(family.id); }}>
          {family.label}
        </button>
      ))}
    </div>
  );
}
