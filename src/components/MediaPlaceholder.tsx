import { useState } from 'react';
import type { MediaAsset } from '../data/media';
import { assetUrl } from '../data/assetUrl';
import { DiagramIcon, ImageIcon } from './Icons';

type Props = MediaAsset & { className?: string; diagram?: boolean; eager?: boolean };

export function MediaPlaceholder({ src, alt, className = '', diagram = false, eager = false }: Props) {
  const [failedSource, setFailedSource] = useState<string>();
  const hasImage = Boolean(src && failedSource !== src);
  return (
    <div className={`media-frame ${className}`} data-placeholder={!hasImage || undefined}>
      {hasImage ? (
        <img src={assetUrl(src)} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setFailedSource(src)} />
      ) : (
        <span className="placeholder-content" role="img" aria-label={`${alt} — ${diagram ? 'diagram' : 'image'} placeholder`}>
          {diagram ? <DiagramIcon /> : <ImageIcon />}
        </span>
      )}
    </div>
  );
}
