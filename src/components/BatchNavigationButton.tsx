type Props = {
  direction: -1 | 1;
  onNavigate: (direction: -1 | 1) => void;
  disabled: boolean;
  className: string;
};

export function BatchNavigationButton({ direction, onNavigate, disabled, className }: Props) {
  const label = direction === -1 ? 'Previous' : 'Next';
  return (
    <button type="button" className={`batch-navigation batch-navigation-${direction === -1 ? 'previous' : 'next'} ${className}`}
      onClick={() => onNavigate(direction)} disabled={disabled}
      aria-label={`${label} image batch`} aria-controls="comparison-panel" title={`${label} images for this prompt`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
        <path d="m8 5 7 7-7 7" />
      </svg>
    </button>
  );
}
