// lighthouse results (prompt 14), four images per batch. Baselines: seeds 50-53, exact short prompt.
// FLUX.2 [klein] base 50 steps CFG 4; FLUX.2 [klein] 4-step; RTDMD 4-step; SMD teacher-4b 4-step.
// PMD: Hidir/PMD FLUX2_Klein_4B/ckpt1500_B16_D4_G0.75_512x512, 4 steps, seeds 50-65 (file NN = seed 49+NN).
// PMD first batch hand-picked for diversity (seeds 50, 61, 62, 54); the rest in seed order.
export const lighthouseComparisonMedia = {
  "competitors": {
    "flux-klein-50x2": [
      "/media/comparisons/lighthouse/klein-base-50x2/lighthouse_01.png",
      "/media/comparisons/lighthouse/klein-base-50x2/lighthouse_02.png",
      "/media/comparisons/lighthouse/klein-base-50x2/lighthouse_03.png",
      "/media/comparisons/lighthouse/klein-base-50x2/lighthouse_04.png"
    ],
    "flux-klein-4": [
      "/media/comparisons/lighthouse/klein-4step/lighthouse_01.png",
      "/media/comparisons/lighthouse/klein-4step/lighthouse_02.png",
      "/media/comparisons/lighthouse/klein-4step/lighthouse_03.png",
      "/media/comparisons/lighthouse/klein-4step/lighthouse_04.png"
    ],
    "rtdmd": [
      "/media/comparisons/lighthouse/rtdmd/lighthouse_01.png",
      "/media/comparisons/lighthouse/rtdmd/lighthouse_02.png",
      "/media/comparisons/lighthouse/rtdmd/lighthouse_03.png",
      "/media/comparisons/lighthouse/rtdmd/lighthouse_04.png"
    ],
    "smd": [
      "/media/comparisons/lighthouse/smd/lighthouse_01.png",
      "/media/comparisons/lighthouse/smd/lighthouse_02.png",
      "/media/comparisons/lighthouse/smd/lighthouse_03.png",
      "/media/comparisons/lighthouse/smd/lighthouse_04.png"
    ]
  },
  "pmd": [
    "/media/comparisons/lighthouse/pmd/lighthouse_01.png",
    "/media/comparisons/lighthouse/pmd/lighthouse_12.png",
    "/media/comparisons/lighthouse/pmd/lighthouse_13.png",
    "/media/comparisons/lighthouse/pmd/lighthouse_05.png",
    "/media/comparisons/lighthouse/pmd/lighthouse_02.png",
    "/media/comparisons/lighthouse/pmd/lighthouse_03.png",
    "/media/comparisons/lighthouse/pmd/lighthouse_04.png",
    "/media/comparisons/lighthouse/pmd/lighthouse_06.png",
    "/media/comparisons/lighthouse/pmd/lighthouse_07.png",
    "/media/comparisons/lighthouse/pmd/lighthouse_08.png",
    "/media/comparisons/lighthouse/pmd/lighthouse_09.png",
    "/media/comparisons/lighthouse/pmd/lighthouse_10.png",
    "/media/comparisons/lighthouse/pmd/lighthouse_11.png",
    "/media/comparisons/lighthouse/pmd/lighthouse_14.png",
    "/media/comparisons/lighthouse/pmd/lighthouse_15.png",
    "/media/comparisons/lighthouse/pmd/lighthouse_16.png"
  ]
} as const;
