// greekcat results, four images per batch. SMD uses seeds 50-65.
// SMD: SMD FLUX.2 Klein 4B teacher-4b, 4 steps, seed order. PMD: B16/D4 checkpoint 1500, 4 steps.
// PMD files 01-16 = seeds 59, 82, 87, 93, 83, 54, 75, 85, 91, 95, 102, 103, 106, 108, 111, 113 (first 4 = diverse batch).
// Hand-curated for anatomical correctness from seeds 50-140 (4x4 + three 5x5 reruns).
// Klein base 50x2 (50 steps, CFG 4), Klein 4-step, RTDMD: one batch each, seeds 50-53, same prompt as SMD (H100 run 2026-11-16).
export const greekCatComparisonMedia = {
  "competitors": {
    "flux-klein-50x2": [
      "/media/comparisons/greekcat/klein-base-50x2/greekcat_01.png",
      "/media/comparisons/greekcat/klein-base-50x2/greekcat_02.png",
      "/media/comparisons/greekcat/klein-base-50x2/greekcat_03.png",
      "/media/comparisons/greekcat/klein-base-50x2/greekcat_04.png"
    ],
    "flux-klein-4": [
      "/media/comparisons/greekcat/klein-4step/greekcat_01.png",
      "/media/comparisons/greekcat/klein-4step/greekcat_02.png",
      "/media/comparisons/greekcat/klein-4step/greekcat_03.png",
      "/media/comparisons/greekcat/klein-4step/greekcat_04.png"
    ],
    "rtdmd": [
      "/media/comparisons/greekcat/rtdmd/greekcat_01.png",
      "/media/comparisons/greekcat/rtdmd/greekcat_02.png",
      "/media/comparisons/greekcat/rtdmd/greekcat_03.png",
      "/media/comparisons/greekcat/rtdmd/greekcat_04.png"
    ],
    "smd": [
      "/media/comparisons/greekcat/smd/greekcat_01.png",
      "/media/comparisons/greekcat/smd/greekcat_02.png",
      "/media/comparisons/greekcat/smd/greekcat_03.png",
      "/media/comparisons/greekcat/smd/greekcat_04.png",
      "/media/comparisons/greekcat/smd/greekcat_05.png",
      "/media/comparisons/greekcat/smd/greekcat_06.png",
      "/media/comparisons/greekcat/smd/greekcat_07.png",
      "/media/comparisons/greekcat/smd/greekcat_08.png",
      "/media/comparisons/greekcat/smd/greekcat_09.png",
      "/media/comparisons/greekcat/smd/greekcat_10.png",
      "/media/comparisons/greekcat/smd/greekcat_11.png",
      "/media/comparisons/greekcat/smd/greekcat_12.png",
      "/media/comparisons/greekcat/smd/greekcat_13.png",
      "/media/comparisons/greekcat/smd/greekcat_14.png",
      "/media/comparisons/greekcat/smd/greekcat_15.png",
      "/media/comparisons/greekcat/smd/greekcat_16.png"
    ]
  },
  "pmd": [
    "/media/comparisons/greekcat/pmd/greekcat_01.png",
    "/media/comparisons/greekcat/pmd/greekcat_02.png",
    "/media/comparisons/greekcat/pmd/greekcat_03.png",
    "/media/comparisons/greekcat/pmd/greekcat_04.png",
    "/media/comparisons/greekcat/pmd/greekcat_05.png",
    "/media/comparisons/greekcat/pmd/greekcat_06.png",
    "/media/comparisons/greekcat/pmd/greekcat_07.png",
    "/media/comparisons/greekcat/pmd/greekcat_08.png",
    "/media/comparisons/greekcat/pmd/greekcat_09.png",
    "/media/comparisons/greekcat/pmd/greekcat_10.png",
    "/media/comparisons/greekcat/pmd/greekcat_11.png",
    "/media/comparisons/greekcat/pmd/greekcat_12.png",
    "/media/comparisons/greekcat/pmd/greekcat_13.png",
    "/media/comparisons/greekcat/pmd/greekcat_14.png",
    "/media/comparisons/greekcat/pmd/greekcat_15.png",
    "/media/comparisons/greekcat/pmd/greekcat_16.png"
  ]
} as const;
