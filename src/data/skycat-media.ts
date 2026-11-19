// skycat results, four images per batch. Both models use seeds 50-65.
// SMD: SMD FLUX.2 Klein 4B teacher-4b, 4 steps, seed order. PMD: B16/D4 checkpoint 1500, 4 steps.
// PMD first batch hand-picked for diversity (seeds 50, 51, 63, 59); the rest in seed order.
// Klein base 50x2 (50 steps, CFG 4), Klein 4-step, RTDMD: one batch each, seeds 50-53, same prompt as SMD (H100 run 2026-11-16).
export const skycatComparisonMedia = {
  "competitors": {
    "flux-klein-50x2": [
      "/media/comparisons/skycat/klein-base-50x2/skycat_01.png",
      "/media/comparisons/skycat/klein-base-50x2/skycat_02.png",
      "/media/comparisons/skycat/klein-base-50x2/skycat_03.png",
      "/media/comparisons/skycat/klein-base-50x2/skycat_04.png"
    ],
    "flux-klein-4": [
      "/media/comparisons/skycat/klein-4step/skycat_01.png",
      "/media/comparisons/skycat/klein-4step/skycat_02.png",
      "/media/comparisons/skycat/klein-4step/skycat_03.png",
      "/media/comparisons/skycat/klein-4step/skycat_04.png"
    ],
    "rtdmd": [
      "/media/comparisons/skycat/rtdmd/skycat_01.png",
      "/media/comparisons/skycat/rtdmd/skycat_02.png",
      "/media/comparisons/skycat/rtdmd/skycat_03.png",
      "/media/comparisons/skycat/rtdmd/skycat_04.png"
    ],
    "smd": [
      "/media/comparisons/skycat/smd/skycat_01.png",
      "/media/comparisons/skycat/smd/skycat_02.png",
      "/media/comparisons/skycat/smd/skycat_03.png",
      "/media/comparisons/skycat/smd/skycat_04.png",
      "/media/comparisons/skycat/smd/skycat_05.png",
      "/media/comparisons/skycat/smd/skycat_06.png",
      "/media/comparisons/skycat/smd/skycat_07.png",
      "/media/comparisons/skycat/smd/skycat_08.png",
      "/media/comparisons/skycat/smd/skycat_09.png",
      "/media/comparisons/skycat/smd/skycat_10.png",
      "/media/comparisons/skycat/smd/skycat_11.png",
      "/media/comparisons/skycat/smd/skycat_12.png",
      "/media/comparisons/skycat/smd/skycat_13.png",
      "/media/comparisons/skycat/smd/skycat_14.png",
      "/media/comparisons/skycat/smd/skycat_15.png",
      "/media/comparisons/skycat/smd/skycat_16.png"
    ]
  },
  "pmd": [
    "/media/comparisons/skycat/pmd/skycat_01.png",
    "/media/comparisons/skycat/pmd/skycat_02.png",
    "/media/comparisons/skycat/pmd/skycat_14.png",
    "/media/comparisons/skycat/pmd/skycat_10.png",
    "/media/comparisons/skycat/pmd/skycat_03.png",
    "/media/comparisons/skycat/pmd/skycat_04.png",
    "/media/comparisons/skycat/pmd/skycat_05.png",
    "/media/comparisons/skycat/pmd/skycat_06.png",
    "/media/comparisons/skycat/pmd/skycat_07.png",
    "/media/comparisons/skycat/pmd/skycat_08.png",
    "/media/comparisons/skycat/pmd/skycat_09.png",
    "/media/comparisons/skycat/pmd/skycat_11.png",
    "/media/comparisons/skycat/pmd/skycat_12.png",
    "/media/comparisons/skycat/pmd/skycat_13.png",
    "/media/comparisons/skycat/pmd/skycat_15.png",
    "/media/comparisons/skycat/pmd/skycat_16.png"
  ]
} as const;
