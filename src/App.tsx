import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
// import { FeaturedImageMosaic } from './components/FeaturedImageMosaic';
import { TeaserVideo } from './components/TeaserVideo';
import { ImageComparisonGallery } from './components/ImageComparisonGallery';
import { VideoComparisonGallery } from './components/VideoComparisonGallery';
import { Citation } from './components/Citation';
import { Footer } from './components/Footer';

export function App() {
  const [citationOpen, setCitationOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#gallery">Skip to image comparisons</a>
      <div id="overview" />
      <Header />
      <main>
        <div className="project-intro">
          <Hero onCitationOpen={() => setCitationOpen(true)} />
          {/* <FeaturedImageMosaic /> */}
          <TeaserVideo />
        </div>
        <ImageComparisonGallery />
        <VideoComparisonGallery />
        <Citation open={citationOpen} onOpenChange={setCitationOpen} />
      </main>
      <Footer />
    </>
  );
}
