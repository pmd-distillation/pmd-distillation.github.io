import { featuredMedia } from '../data/media';
import { MediaPlaceholder } from './MediaPlaceholder';

export function FeaturedImageMosaic() {
  return (
    <section className="featured wide-container" aria-label="Featured image compositions — placeholders">
      <div className="featured-mosaic">
        {featuredMedia.map(({ id, ...media }) => <MediaPlaceholder key={id} {...media} className={`mosaic-${id}`} eager />)}
      </div>
      <div className="featured-caption"><span>Selected compositions</span><span>Image placeholders</span></div>
    </section>
  );
}
