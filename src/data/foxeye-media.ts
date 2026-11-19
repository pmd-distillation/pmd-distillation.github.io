// foxeye results, four images per batch. Both models use seeds 50-65.
// SMD: SMD FLUX.2 Klein 4B teacher-4b, 4 steps, seed order. PMD: B16/D4 checkpoint 1500, 4 steps.
// PMD first batch hand-picked for diversity (seeds 52, 53, 55, 61); the rest in seed order.
// Klein base 50x2 (50 steps, CFG 4), Klein 4-step, RTDMD: one batch each, seeds 50-53, same prompt as SMD (H100 run 2026-11-16).
export const foxEyeComparisonMedia = {
  "competitors": {
    "flux-klein-50x2": [
      "/media/comparisons/foxeye/klein-base-50x2/foxeye_01.png",
      "/media/comparisons/foxeye/klein-base-50x2/foxeye_02.png",
      "/media/comparisons/foxeye/klein-base-50x2/foxeye_03.png",
      "/media/comparisons/foxeye/klein-base-50x2/foxeye_04.png"
    ],
    "flux-klein-4": [
      "/media/comparisons/foxeye/klein-4step/foxeye_01.png",
      "/media/comparisons/foxeye/klein-4step/foxeye_02.png",
      "/media/comparisons/foxeye/klein-4step/foxeye_03.png",
      "/media/comparisons/foxeye/klein-4step/foxeye_04.png"
    ],
    "rtdmd": [
      "/media/comparisons/foxeye/rtdmd/foxeye_01.png",
      "/media/comparisons/foxeye/rtdmd/foxeye_02.png",
      "/media/comparisons/foxeye/rtdmd/foxeye_03.png",
      "/media/comparisons/foxeye/rtdmd/foxeye_04.png"
    ],
    "smd": [
      "/media/comparisons/foxeye/smd/foxeye_01.png",
      "/media/comparisons/foxeye/smd/foxeye_02.png",
      "/media/comparisons/foxeye/smd/foxeye_03.png",
      "/media/comparisons/foxeye/smd/foxeye_04.png",
      "/media/comparisons/foxeye/smd/foxeye_05.png",
      "/media/comparisons/foxeye/smd/foxeye_06.png",
      "/media/comparisons/foxeye/smd/foxeye_07.png",
      "/media/comparisons/foxeye/smd/foxeye_08.png",
      "/media/comparisons/foxeye/smd/foxeye_09.png",
      "/media/comparisons/foxeye/smd/foxeye_10.png",
      "/media/comparisons/foxeye/smd/foxeye_11.png",
      "/media/comparisons/foxeye/smd/foxeye_12.png",
      "/media/comparisons/foxeye/smd/foxeye_13.png",
      "/media/comparisons/foxeye/smd/foxeye_14.png",
      "/media/comparisons/foxeye/smd/foxeye_15.png",
      "/media/comparisons/foxeye/smd/foxeye_16.png"
    ]
  },
  "pmd": [
    "/media/comparisons/foxeye/pmd/foxeye_03.png",
    "/media/comparisons/foxeye/pmd/foxeye_04.png",
    "/media/comparisons/foxeye/pmd/foxeye_06.png",
    "/media/comparisons/foxeye/pmd/foxeye_12.png",
    "/media/comparisons/foxeye/pmd/foxeye_01.png",
    "/media/comparisons/foxeye/pmd/foxeye_02.png",
    "/media/comparisons/foxeye/pmd/foxeye_05.png",
    "/media/comparisons/foxeye/pmd/foxeye_07.png",
    "/media/comparisons/foxeye/pmd/foxeye_08.png",
    "/media/comparisons/foxeye/pmd/foxeye_09.png",
    "/media/comparisons/foxeye/pmd/foxeye_10.png",
    "/media/comparisons/foxeye/pmd/foxeye_11.png",
    "/media/comparisons/foxeye/pmd/foxeye_13.png",
    "/media/comparisons/foxeye/pmd/foxeye_14.png",
    "/media/comparisons/foxeye/pmd/foxeye_15.png",
    "/media/comparisons/foxeye/pmd/foxeye_16.png"
  ]
} as const;
