export const resources: { paper?: string; dailyPapers?: string; code?: string } = {
  paper: 'https://arxiv.org/pdf/2611.26629',
  dailyPapers: 'https://huggingface.co/papers/2611.26629',
  code: 'https://github.com/yesiltepe-hidir/PMD',
};

export const affiliations = [
  { id: 1, name: 'Virginia Tech' },
  { id: 2, name: 'NVIDIA' },
] as const;

export const authors = [
  { name: 'Hidir Yesiltepe', affiliation: 1, url: 'https://yesiltepe-hidir.github.io/' },
  { name: 'Julius Berner', affiliation: 2, url: 'https://jberner.info/' },
  { name: 'Arash Vahdat', affiliation: 2, url: 'http://latentspace.cc/' },
  { name: 'Pinar Yanardag', affiliation: 1, url: 'http://pinguar.org/' },
] as const;

export const citation = `@misc{pmd,
  title        = {Posterior Matching Distillation},
  author       = {${authors.map(author => author.name).join(' and ')}},
  year         = {[To be supplied]},
  howpublished = {[To be supplied]}
}`;
