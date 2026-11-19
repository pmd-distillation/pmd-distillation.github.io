// Resolve root-relative media paths ("/media/...") against Vite's base URL, so the site works at a
// domain root (user.github.io, custom domain) and under a project subpath (user.github.io/repo/).
const base = import.meta.env.BASE_URL;

export function assetUrl(path: string): string;
export function assetUrl(path: string | undefined): string | undefined;
export function assetUrl(path: string | undefined) {
  if (!path || !path.startsWith('/') || path.startsWith('//')) return path;
  return `${base}${path.slice(1)}`;
}
