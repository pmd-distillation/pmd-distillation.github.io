// Traveler results in original sample order (seeds 50-65, shared by SMD and PMD), four images per batch.
// SMD: SMD FLUX.2 Klein 4B teacher-4b, 4 steps. PMD: B16/D4 checkpoint 1500, 4 steps.
// Klein base 50x2 (50 steps, CFG 4), Klein 4-step, RTDMD: one batch each, seeds 50-53, same prompt as SMD (H100 run 2026-11-16).
export const travelerComparisonMedia = {
  "competitors": {
    "flux-klein-50x2": [
      "/media/comparisons/traveler/klein-base-50x2/traveler_01.png",
      "/media/comparisons/traveler/klein-base-50x2/traveler_02.png",
      "/media/comparisons/traveler/klein-base-50x2/traveler_03.png",
      "/media/comparisons/traveler/klein-base-50x2/traveler_04.png"
    ],
    "flux-klein-4": [
      "/media/comparisons/traveler/klein-4step/traveler_01.png",
      "/media/comparisons/traveler/klein-4step/traveler_02.png",
      "/media/comparisons/traveler/klein-4step/traveler_03.png",
      "/media/comparisons/traveler/klein-4step/traveler_04.png"
    ],
    "rtdmd": [
      "/media/comparisons/traveler/rtdmd/traveler_01.png",
      "/media/comparisons/traveler/rtdmd/traveler_02.png",
      "/media/comparisons/traveler/rtdmd/traveler_03.png",
      "/media/comparisons/traveler/rtdmd/traveler_04.png"
    ],
    "smd": [
      "/media/comparisons/traveler/smd/traveler_01.png",
      "/media/comparisons/traveler/smd/traveler_02.png",
      "/media/comparisons/traveler/smd/traveler_03.png",
      "/media/comparisons/traveler/smd/traveler_04.png",
      "/media/comparisons/traveler/smd/traveler_05.png",
      "/media/comparisons/traveler/smd/traveler_06.png",
      "/media/comparisons/traveler/smd/traveler_07.png",
      "/media/comparisons/traveler/smd/traveler_08.png",
      "/media/comparisons/traveler/smd/traveler_09.png",
      "/media/comparisons/traveler/smd/traveler_10.png",
      "/media/comparisons/traveler/smd/traveler_11.png",
      "/media/comparisons/traveler/smd/traveler_12.png",
      "/media/comparisons/traveler/smd/traveler_13.png",
      "/media/comparisons/traveler/smd/traveler_14.png",
      "/media/comparisons/traveler/smd/traveler_15.png",
      "/media/comparisons/traveler/smd/traveler_16.png"
    ]
  },
  "pmd": [
    "/media/comparisons/traveler/pmd/traveler_01.png",
    "/media/comparisons/traveler/pmd/traveler_02.png",
    "/media/comparisons/traveler/pmd/traveler_03.png",
    "/media/comparisons/traveler/pmd/traveler_04.png",
    "/media/comparisons/traveler/pmd/traveler_05.png",
    "/media/comparisons/traveler/pmd/traveler_06.png",
    "/media/comparisons/traveler/pmd/traveler_07.png",
    "/media/comparisons/traveler/pmd/traveler_08.png",
    "/media/comparisons/traveler/pmd/traveler_09.png",
    "/media/comparisons/traveler/pmd/traveler_10.png",
    "/media/comparisons/traveler/pmd/traveler_11.png",
    "/media/comparisons/traveler/pmd/traveler_12.png",
    "/media/comparisons/traveler/pmd/traveler_13.png",
    "/media/comparisons/traveler/pmd/traveler_14.png",
    "/media/comparisons/traveler/pmd/traveler_15.png",
    "/media/comparisons/traveler/pmd/traveler_16.png"
  ]
} as const;
