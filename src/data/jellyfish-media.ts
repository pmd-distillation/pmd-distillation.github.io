// Jellyfish results, four images per batch.
// SMD: SMD FLUX.2 Klein 4B teacher-4b, 4 steps. Seeds 50-65 minus the six with a photo-print border (50,51,53,60,62,63), replaced in place by 76,77,78,79,85,86. PMD: B16/D4 checkpoint 1500, 4 steps.
// PMD first batch hand-picked for diversity (seeds 61, 59, 55, 64); the rest in seed order.
// Klein base 50x2 (50 steps, CFG 4), Klein 4-step, RTDMD: one batch each, seeds 50-53, same prompt as SMD (H100 run 2026-11-16).
export const jellyfishComparisonMedia = {
  "competitors": {
    "flux-klein-50x2": [
      "/media/comparisons/jellyfish/klein-base-50x2/jellyfish_01.png",
      "/media/comparisons/jellyfish/klein-base-50x2/jellyfish_02.png",
      "/media/comparisons/jellyfish/klein-base-50x2/jellyfish_03.png",
      "/media/comparisons/jellyfish/klein-base-50x2/jellyfish_04.png"
    ],
    "flux-klein-4": [
      "/media/comparisons/jellyfish/klein-4step/jellyfish_01.png",
      "/media/comparisons/jellyfish/klein-4step/jellyfish_02.png",
      "/media/comparisons/jellyfish/klein-4step/jellyfish_03.png",
      "/media/comparisons/jellyfish/klein-4step/jellyfish_04.png"
    ],
    "rtdmd": [
      "/media/comparisons/jellyfish/rtdmd/jellyfish_01.png",
      "/media/comparisons/jellyfish/rtdmd/jellyfish_02.png",
      "/media/comparisons/jellyfish/rtdmd/jellyfish_03.png",
      "/media/comparisons/jellyfish/rtdmd/jellyfish_04.png"
    ],
    "smd": [
      "/media/comparisons/jellyfish/smd/jellyfish_01.png",
      "/media/comparisons/jellyfish/smd/jellyfish_02.png",
      "/media/comparisons/jellyfish/smd/jellyfish_03.png",
      "/media/comparisons/jellyfish/smd/jellyfish_04.png",
      "/media/comparisons/jellyfish/smd/jellyfish_05.png",
      "/media/comparisons/jellyfish/smd/jellyfish_06.png",
      "/media/comparisons/jellyfish/smd/jellyfish_07.png",
      "/media/comparisons/jellyfish/smd/jellyfish_08.png",
      "/media/comparisons/jellyfish/smd/jellyfish_09.png",
      "/media/comparisons/jellyfish/smd/jellyfish_10.png",
      "/media/comparisons/jellyfish/smd/jellyfish_11.png",
      "/media/comparisons/jellyfish/smd/jellyfish_12.png",
      "/media/comparisons/jellyfish/smd/jellyfish_13.png",
      "/media/comparisons/jellyfish/smd/jellyfish_14.png",
      "/media/comparisons/jellyfish/smd/jellyfish_15.png",
      "/media/comparisons/jellyfish/smd/jellyfish_16.png"
    ]
  },
  "pmd": [
    "/media/comparisons/jellyfish/pmd/jellyfish_12.png",
    "/media/comparisons/jellyfish/pmd/jellyfish_10.png",
    "/media/comparisons/jellyfish/pmd/jellyfish_06.png",
    "/media/comparisons/jellyfish/pmd/jellyfish_15.png",
    "/media/comparisons/jellyfish/pmd/jellyfish_01.png",
    "/media/comparisons/jellyfish/pmd/jellyfish_02.png",
    "/media/comparisons/jellyfish/pmd/jellyfish_03.png",
    "/media/comparisons/jellyfish/pmd/jellyfish_04.png",
    "/media/comparisons/jellyfish/pmd/jellyfish_05.png",
    "/media/comparisons/jellyfish/pmd/jellyfish_07.png",
    "/media/comparisons/jellyfish/pmd/jellyfish_08.png",
    "/media/comparisons/jellyfish/pmd/jellyfish_09.png",
    "/media/comparisons/jellyfish/pmd/jellyfish_11.png",
    "/media/comparisons/jellyfish/pmd/jellyfish_13.png",
    "/media/comparisons/jellyfish/pmd/jellyfish_14.png",
    "/media/comparisons/jellyfish/pmd/jellyfish_16.png"
  ]
} as const;
