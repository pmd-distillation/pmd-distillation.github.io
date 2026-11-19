import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base: the built site works from any GitHub Pages path (user.github.io, user.github.io/repo/,
// or a custom domain) without rebuilding.
export default defineConfig({ base: './', plugins: [react()] });
