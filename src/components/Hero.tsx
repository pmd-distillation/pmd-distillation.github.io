import { affiliations, authors, resources } from '../data/paper';
import { ArrowUpRightIcon, CodeIcon, HuggingFaceIcon, PaperIcon } from './Icons';

export function Hero({ onCitationOpen }: { onCitationOpen: () => void }) {
  return (
    <section className="hero container" aria-labelledby="paper-title">
      <div className="hero-heading">
        <h1 id="paper-title">Posterior Matching<br /><em>Distillation</em></h1>
        <ul className="hero-authors" aria-label="Authors">
          {authors.map(author => (
            <li key={author.name}>
              <a className="author-link" href={author.url} target="_blank" rel="noopener noreferrer">{author.name}</a><sup aria-hidden="true">{author.affiliation}</sup>
              <span className="sr-only">, {affiliations.find(affiliation => affiliation.id === author.affiliation)?.name}</span>
            </li>
          ))}
        </ul>
        <ul className="hero-affiliations" aria-label="Author affiliations">
          {affiliations.map(affiliation => (
            <li key={affiliation.id}><sup aria-hidden="true">{affiliation.id}</sup>{affiliation.name}</li>
          ))}
        </ul>
      </div>
      <div className="hero-aside">
        <p>Learning conditional posteriors for few-step diffusion generation.</p>
        <div className="resource-links" aria-label="Paper resources">
          {resources.paper ? <a className="resource-button" href={resources.paper}><PaperIcon />Paper</a> :
            <button className="resource-button" type="button" disabled title="Paper link forthcoming"><PaperIcon />Paper<span className="sr-only"> — forthcoming</span></button>}
          {resources.dailyPapers && <a className="resource-button" href={resources.dailyPapers} target="_blank" rel="noopener noreferrer"><HuggingFaceIcon />Daily Papers<span className="sr-only"> on Hugging Face</span></a>}
          {resources.code ? <a className="resource-button" href={resources.code} target="_blank" rel="noopener noreferrer"><CodeIcon />Code</a> :
            <button className="resource-button" type="button" disabled title="Code link forthcoming"><CodeIcon />Code<span className="sr-only"> — forthcoming</span></button>}
          <a className="resource-button" href="#paper" onClick={onCitationOpen}>BibTeX<ArrowUpRightIcon /></a>
        </div>
      </div>
    </section>
  );
}
