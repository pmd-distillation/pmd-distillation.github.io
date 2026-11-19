export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#overview" aria-label="PMD home">PMD<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#overview">Overview</a>
          <a href="#gallery">Gallery</a>
          <a href="#paper">Paper</a>
        </nav>
      </div>
    </header>
  );
}
