// observatory results (prompt 12), four images per batch. Baselines: seeds 50-53, exact short prompt.
// FLUX.2 [klein] base 50 steps CFG 4; FLUX.2 [klein] 4-step; RTDMD 4-step; SMD teacher-4b 4-step.
// PMD: Hidir/PMD FLUX2_Klein_4B/ckpt1500_B16_D4_G0.75_512x512, 4 steps, seeds 50-65 (file NN = seed 49+NN).
// PMD first batch hand-picked for diversity (seeds 55, 59, 52, 58); the rest in seed order.
export const observatoryComparisonMedia = {
  "competitors": {
    "flux-klein-50x2": [
      "/media/comparisons/observatory/klein-base-50x2/observatory_01.png",
      "/media/comparisons/observatory/klein-base-50x2/observatory_02.png",
      "/media/comparisons/observatory/klein-base-50x2/observatory_03.png",
      "/media/comparisons/observatory/klein-base-50x2/observatory_04.png"
    ],
    "flux-klein-4": [
      "/media/comparisons/observatory/klein-4step/observatory_01.png",
      "/media/comparisons/observatory/klein-4step/observatory_02.png",
      "/media/comparisons/observatory/klein-4step/observatory_03.png",
      "/media/comparisons/observatory/klein-4step/observatory_04.png"
    ],
    "rtdmd": [
      "/media/comparisons/observatory/rtdmd/observatory_01.png",
      "/media/comparisons/observatory/rtdmd/observatory_02.png",
      "/media/comparisons/observatory/rtdmd/observatory_03.png",
      "/media/comparisons/observatory/rtdmd/observatory_04.png"
    ],
    "smd": [
      "/media/comparisons/observatory/smd/observatory_01.png",
      "/media/comparisons/observatory/smd/observatory_02.png",
      "/media/comparisons/observatory/smd/observatory_03.png",
      "/media/comparisons/observatory/smd/observatory_04.png"
    ]
  },
  "pmd": [
    "/media/comparisons/observatory/pmd/observatory_06.png",
    "/media/comparisons/observatory/pmd/observatory_10.png",
    "/media/comparisons/observatory/pmd/observatory_03.png",
    "/media/comparisons/observatory/pmd/observatory_09.png",
    "/media/comparisons/observatory/pmd/observatory_01.png",
    "/media/comparisons/observatory/pmd/observatory_02.png",
    "/media/comparisons/observatory/pmd/observatory_04.png",
    "/media/comparisons/observatory/pmd/observatory_05.png",
    "/media/comparisons/observatory/pmd/observatory_07.png",
    "/media/comparisons/observatory/pmd/observatory_08.png",
    "/media/comparisons/observatory/pmd/observatory_11.png",
    "/media/comparisons/observatory/pmd/observatory_12.png",
    "/media/comparisons/observatory/pmd/observatory_13.png",
    "/media/comparisons/observatory/pmd/observatory_14.png",
    "/media/comparisons/observatory/pmd/observatory_15.png",
    "/media/comparisons/observatory/pmd/observatory_16.png"
  ]
} as const;
