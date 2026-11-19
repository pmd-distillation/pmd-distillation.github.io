# Posterior Matching Distillation (PMD)

Project page for **Posterior Matching Distillation**, a distribution-based diffusion distillation method that matches the
teacher's full posterior at each noise level and supports any-step sampling.

Live site: https://pmd-distillation.github.io/

## Develop

```bash
npm ci
npm run dev      # http://127.0.0.1:4173
npm run build    # static site in dist/
```

The site is a Vite + React app. Pushing to `main` builds it and deploys `dist/` to GitHub Pages
(`.github/workflows/deploy.yml`). Image and video results live in `public/media/`; their paths and the comparison
settings are listed in `src/data/`.

The SDXL Teacher (50×2) row (`public/media/comparisons-sdxl/teacher/<id>/seed<N>.webp`) uses SDXL Base 1.0 with the
diffusers `StableDiffusionXLPipeline` defaults: Euler, 50 steps, guidance 5.0, 1024 px. It uses the same prompts and seeds
as the SDXL competitor rows (no-hat robin for prompt 05, corgi for prompt 10).

The video Teacher 50×2 row (`public/media/videos/<slug>/teacher/{0,1,2}.mp4`) uses Wan2.1-T2V-1.3B with the official
Wan2.1 `generate.py` T2V defaults (run through diffusers `WanPipeline`): UniPC, sample shift 5.0, 50 steps, guidance 5.0,
and the official Chinese negative prompt. Without that negative prompt and at shift 3.0, Wan outputs are oversaturated and
over-sharpened. Clips are 832×480, 81 frames,
16 fps, seeds 0-2, H.264 CRF 18.
