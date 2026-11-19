// wildflowers results (prompt 11), four images per batch. Baselines: seeds 50-53, exact short prompt.
// FLUX.2 [klein] base 50 steps CFG 4; FLUX.2 [klein] 4-step; RTDMD 4-step; SMD teacher-4b 4-step.
// PMD: Hidir/PMD FLUX2_Klein_4B/ckpt1500_B16_D4_G0.75_512x512, 4 steps, seeds 50-65 (file NN = seed 49+NN).
// PMD first batch hand-picked for diversity (seeds 61, 55, 57, 59); the rest in seed order.
export const wildflowersComparisonMedia = {
  "competitors": {
    "flux-klein-50x2": [
      "/media/comparisons/wildflowers/klein-base-50x2/wildflowers_01.png",
      "/media/comparisons/wildflowers/klein-base-50x2/wildflowers_02.png",
      "/media/comparisons/wildflowers/klein-base-50x2/wildflowers_03.png",
      "/media/comparisons/wildflowers/klein-base-50x2/wildflowers_04.png"
    ],
    "flux-klein-4": [
      "/media/comparisons/wildflowers/klein-4step/wildflowers_01.png",
      "/media/comparisons/wildflowers/klein-4step/wildflowers_02.png",
      "/media/comparisons/wildflowers/klein-4step/wildflowers_03.png",
      "/media/comparisons/wildflowers/klein-4step/wildflowers_04.png"
    ],
    "rtdmd": [
      "/media/comparisons/wildflowers/rtdmd/wildflowers_01.png",
      "/media/comparisons/wildflowers/rtdmd/wildflowers_02.png",
      "/media/comparisons/wildflowers/rtdmd/wildflowers_03.png",
      "/media/comparisons/wildflowers/rtdmd/wildflowers_04.png"
    ],
    "smd": [
      "/media/comparisons/wildflowers/smd/wildflowers_01.png",
      "/media/comparisons/wildflowers/smd/wildflowers_02.png",
      "/media/comparisons/wildflowers/smd/wildflowers_03.png",
      "/media/comparisons/wildflowers/smd/wildflowers_04.png"
    ]
  },
  "pmd": [
    "/media/comparisons/wildflowers/pmd/wildflowers_12.png",
    "/media/comparisons/wildflowers/pmd/wildflowers_06.png",
    "/media/comparisons/wildflowers/pmd/wildflowers_08.png",
    "/media/comparisons/wildflowers/pmd/wildflowers_10.png",
    "/media/comparisons/wildflowers/pmd/wildflowers_01.png",
    "/media/comparisons/wildflowers/pmd/wildflowers_02.png",
    "/media/comparisons/wildflowers/pmd/wildflowers_03.png",
    "/media/comparisons/wildflowers/pmd/wildflowers_04.png",
    "/media/comparisons/wildflowers/pmd/wildflowers_05.png",
    "/media/comparisons/wildflowers/pmd/wildflowers_07.png",
    "/media/comparisons/wildflowers/pmd/wildflowers_09.png",
    "/media/comparisons/wildflowers/pmd/wildflowers_11.png",
    "/media/comparisons/wildflowers/pmd/wildflowers_13.png",
    "/media/comparisons/wildflowers/pmd/wildflowers_14.png",
    "/media/comparisons/wildflowers/pmd/wildflowers_15.png",
    "/media/comparisons/wildflowers/pmd/wildflowers_16.png"
  ]
} as const;
