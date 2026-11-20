import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;
const defaults: IconProps = {
  width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 1.3, strokeLinecap: 'round',
  strokeLinejoin: 'round', 'aria-hidden': true,
};

export function ImageIcon(props: IconProps) {
  return <svg {...defaults} {...props}><rect x="3.5" y="3.5" width="17" height="17" rx="2.5" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m4 16 5-5 4 4 3-3 4 4" /></svg>;
}
export function VideoIcon(props: IconProps) {
  return <svg {...defaults} {...props}><rect x="3.5" y="5.5" width="17" height="13" rx="2.5" /><path d="m10.5 9.5 4 2.5-4 2.5z" /></svg>;
}
export function DiagramIcon(props: IconProps) {
  return <svg {...defaults} {...props}><rect x="8.5" y="3" width="7" height="5" rx="1" /><path d="M12 8v5m-7 3v-3h14v3" /><rect x="2" y="16" width="6" height="5" rx="1" /><rect x="16" y="16" width="6" height="5" rx="1" /></svg>;
}
export function ArrowIcon({ direction = 'right', ...props }: IconProps & { direction?: 'left' | 'right' | 'up' }) {
  const rotation = direction === 'left' ? 180 : direction === 'up' ? -90 : 0;
  return <svg {...defaults} {...props}><g transform={`rotate(${rotation} 12 12)`}><path d="M4.5 12h15m-6-6 6 6-6 6" /></g></svg>;
}
export function ArrowUpRightIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M6.5 17.5 17 7M7 7h10v10" /></svg>;
}
export function PaperIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M6 3.5h8l4 4v13H6zM14 3.5v4h4M9 12h6M9 16h6" /></svg>;
}
// Line-drawn hugging face (Hugging Face Daily Papers): round face, eyes, smile, and two hands hugging the chin.
export function HuggingFaceIcon(props: IconProps) {
  return <svg {...defaults} {...props}><circle cx="12" cy="10.5" r="7" /><path d="M9.4 8.9v.01M14.6 8.9v.01" strokeWidth={2.2} /><path d="M9.6 12.2c1.3 1.3 3.5 1.3 4.8 0" /><path d="M3.6 14.2c1.1 2.6 3.2 4.1 5.6 4.4M20.4 14.2c-1.1 2.6-3.2 4.1-5.6 4.4" /></svg>;
}
export function CodeIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-12-2 14" /></svg>;
}
export function PlusIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M5 12h14M12 5v14" /></svg>;
}
export function CopyIcon(props: IconProps) {
  return <svg {...defaults} {...props}><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h4" /></svg>;
}
export function CheckIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="m5 12 4 4L19 6" /></svg>;
}
