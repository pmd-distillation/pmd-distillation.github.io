// wazowski results, four images per batch. Both models use seeds 50-65.
// SMD: SMD FLUX.2 Klein 4B teacher-4b, 4 steps, seed order. PMD: B16/D4 checkpoint 1500, 4 steps.
// PMD first batch hand-picked for diversity (seeds 54, 61, 53, 62); the rest in seed order.
// Klein base 50x2 (50 steps, CFG 4), Klein 4-step, RTDMD: one batch each, seeds 50-53, same prompt as SMD (H100 run 2026-11-16).
export const wazowskiComparisonMedia = {
  "competitors": {
    "flux-klein-50x2": [
      "/media/comparisons/wazowski/klein-base-50x2/wazowski_01.png",
      "/media/comparisons/wazowski/klein-base-50x2/wazowski_02.png",
      "/media/comparisons/wazowski/klein-base-50x2/wazowski_03.png",
      "/media/comparisons/wazowski/klein-base-50x2/wazowski_04.png"
    ],
    "flux-klein-4": [
      "/media/comparisons/wazowski/klein-4step/wazowski_01.png",
      "/media/comparisons/wazowski/klein-4step/wazowski_02.png",
      "/media/comparisons/wazowski/klein-4step/wazowski_03.png",
      "/media/comparisons/wazowski/klein-4step/wazowski_04.png"
    ],
    "rtdmd": [
      "/media/comparisons/wazowski/rtdmd/wazowski_01.png",
      "/media/comparisons/wazowski/rtdmd/wazowski_02.png",
      "/media/comparisons/wazowski/rtdmd/wazowski_03.png",
      "/media/comparisons/wazowski/rtdmd/wazowski_04.png"
    ],
    "smd": [
      "/media/comparisons/wazowski/smd/wazowski_01.png",
      "/media/comparisons/wazowski/smd/wazowski_02.png",
      "/media/comparisons/wazowski/smd/wazowski_03.png",
      "/media/comparisons/wazowski/smd/wazowski_04.png",
      "/media/comparisons/wazowski/smd/wazowski_05.png",
      "/media/comparisons/wazowski/smd/wazowski_06.png",
      "/media/comparisons/wazowski/smd/wazowski_07.png",
      "/media/comparisons/wazowski/smd/wazowski_08.png",
      "/media/comparisons/wazowski/smd/wazowski_09.png",
      "/media/comparisons/wazowski/smd/wazowski_10.png",
      "/media/comparisons/wazowski/smd/wazowski_11.png",
      "/media/comparisons/wazowski/smd/wazowski_12.png",
      "/media/comparisons/wazowski/smd/wazowski_13.png",
      "/media/comparisons/wazowski/smd/wazowski_14.png",
      "/media/comparisons/wazowski/smd/wazowski_15.png",
      "/media/comparisons/wazowski/smd/wazowski_16.png"
    ]
  },
  "pmd": [
    "/media/comparisons/wazowski/pmd/wazowski_05.png",
    "/media/comparisons/wazowski/pmd/wazowski_12.png",
    "/media/comparisons/wazowski/pmd/wazowski_04.png",
    "/media/comparisons/wazowski/pmd/wazowski_13.png",
    "/media/comparisons/wazowski/pmd/wazowski_01.png",
    "/media/comparisons/wazowski/pmd/wazowski_02.png",
    "/media/comparisons/wazowski/pmd/wazowski_03.png",
    "/media/comparisons/wazowski/pmd/wazowski_06.png",
    "/media/comparisons/wazowski/pmd/wazowski_07.png",
    "/media/comparisons/wazowski/pmd/wazowski_08.png",
    "/media/comparisons/wazowski/pmd/wazowski_09.png",
    "/media/comparisons/wazowski/pmd/wazowski_10.png",
    "/media/comparisons/wazowski/pmd/wazowski_11.png",
    "/media/comparisons/wazowski/pmd/wazowski_14.png",
    "/media/comparisons/wazowski/pmd/wazowski_15.png",
    "/media/comparisons/wazowski/pmd/wazowski_16.png"
  ]
} as const;
