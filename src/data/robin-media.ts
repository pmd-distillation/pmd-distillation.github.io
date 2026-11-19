// Robin results, four images per batch.
// SMD: SMD FLUX.2 Klein 4B teacher-4b, 4 steps, seeds 50-65 in order.
// PMD: B16/D4 checkpoint 1500, 4 steps, seeds 50-59, 61-65, 67 (seed 60 dropped; 67 rendered as replacement).
// PMD first batch hand-picked for diversity (seeds 51, 59, 53, 63); the rest in seed order.
// Klein base 50x2 (50 steps, CFG 4), Klein 4-step, RTDMD: one batch each, seeds 50-53, same prompt as SMD (H100 run 2026-11-16).
export const robinComparisonMedia = {
  "competitors": {
    "flux-klein-50x2": [
      "/media/comparisons/robin/klein-base-50x2/robin_01.png",
      "/media/comparisons/robin/klein-base-50x2/robin_02.png",
      "/media/comparisons/robin/klein-base-50x2/robin_03.png",
      "/media/comparisons/robin/klein-base-50x2/robin_04.png"
    ],
    "flux-klein-4": [
      "/media/comparisons/robin/klein-4step/robin_01.png",
      "/media/comparisons/robin/klein-4step/robin_02.png",
      "/media/comparisons/robin/klein-4step/robin_03.png",
      "/media/comparisons/robin/klein-4step/robin_04.png"
    ],
    "rtdmd": [
      "/media/comparisons/robin/rtdmd/robin_01.png",
      "/media/comparisons/robin/rtdmd/robin_02.png",
      "/media/comparisons/robin/rtdmd/robin_03.png",
      "/media/comparisons/robin/rtdmd/robin_04.png"
    ],
    "smd": [
      "/media/comparisons/robin/smd/robin_01.png",
      "/media/comparisons/robin/smd/robin_02.png",
      "/media/comparisons/robin/smd/robin_03.png",
      "/media/comparisons/robin/smd/robin_04.png",
      "/media/comparisons/robin/smd/robin_05.png",
      "/media/comparisons/robin/smd/robin_06.png",
      "/media/comparisons/robin/smd/robin_07.png",
      "/media/comparisons/robin/smd/robin_08.png",
      "/media/comparisons/robin/smd/robin_09.png",
      "/media/comparisons/robin/smd/robin_10.png",
      "/media/comparisons/robin/smd/robin_11.png",
      "/media/comparisons/robin/smd/robin_12.png",
      "/media/comparisons/robin/smd/robin_13.png",
      "/media/comparisons/robin/smd/robin_14.png",
      "/media/comparisons/robin/smd/robin_15.png",
      "/media/comparisons/robin/smd/robin_16.png"
    ]
  },
  "pmd": [
    "/media/comparisons/robin/pmd/robin_02.png",
    "/media/comparisons/robin/pmd/robin_10.png",
    "/media/comparisons/robin/pmd/robin_04.png",
    "/media/comparisons/robin/pmd/robin_13.png",
    "/media/comparisons/robin/pmd/robin_01.png",
    "/media/comparisons/robin/pmd/robin_03.png",
    "/media/comparisons/robin/pmd/robin_05.png",
    "/media/comparisons/robin/pmd/robin_06.png",
    "/media/comparisons/robin/pmd/robin_07.png",
    "/media/comparisons/robin/pmd/robin_08.png",
    "/media/comparisons/robin/pmd/robin_09.png",
    "/media/comparisons/robin/pmd/robin_11.png",
    "/media/comparisons/robin/pmd/robin_12.png",
    "/media/comparisons/robin/pmd/robin_14.png",
    "/media/comparisons/robin/pmd/robin_15.png",
    "/media/comparisons/robin/pmd/robin_16.png"
  ]
} as const;
