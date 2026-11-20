import { Header } from './components/Header';
import { Hero } from './components/Hero';
// import { FeaturedImageMosaic } from './components/FeaturedImageMosaic';
// import { TeaserVideo } from './components/TeaserVideo';
import { ImageComparisonGallery } from './components/ImageComparisonGallery';
import { VideoComparisonGallery } from './components/VideoComparisonGallery';
import { MethodSection } from './components/MethodSection';
import { Citation } from './components/Citation';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <a className="skip-link" href="#gallery">Skip to image comparisons</a>
      <div id="overview" />
      <Header />
      <main>
        <div className="project-intro">
          <Hero />
          {/* <FeaturedImageMosaic /> */}
          {/* <TeaserVideo /> */}
          <MethodSection intro />
        </div>
        <ImageComparisonGallery />
        <VideoComparisonGallery />
        <Citation />
      </main>
      <Footer />
    </>
  );
}
