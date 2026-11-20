export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#overview" aria-label="PMD home">PMD<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#method">Method</a>
          <a href="#gallery"><span className="nav-full">Image Generation</span><span className="nav-short" aria-hidden="true">Images</span></a>
          <a href="#video-gallery"><span className="nav-full">Video Generation</span><span className="nav-short" aria-hidden="true">Videos</span></a>
          <a href="#paper">Citation</a>
        </nav>
      </div>
    </header>
  );
}
