// pear results (prompt 13), four images per batch. Baselines: seeds 50-53, exact short prompt.
// FLUX.2 [klein] base 50 steps CFG 4; FLUX.2 [klein] 4-step; RTDMD 4-step; SMD teacher-4b 4-step.
// PMD: Hidir/PMD FLUX2_Klein_4B/ckpt1500_B16_D4_G0.75_512x512, 4 steps, seeds 50-65 (file NN = seed 49+NN).
// PMD first batch hand-picked for diversity (seeds 52, 61, 54, 64); the rest in seed order.
export const pearComparisonMedia = {
  "competitors": {
    "flux-klein-50x2": [
      "/media/comparisons/pear/klein-base-50x2/pear_01.png",
      "/media/comparisons/pear/klein-base-50x2/pear_02.png",
      "/media/comparisons/pear/klein-base-50x2/pear_03.png",
      "/media/comparisons/pear/klein-base-50x2/pear_04.png"
    ],
    "flux-klein-4": [
      "/media/comparisons/pear/klein-4step/pear_01.png",
      "/media/comparisons/pear/klein-4step/pear_02.png",
      "/media/comparisons/pear/klein-4step/pear_03.png",
      "/media/comparisons/pear/klein-4step/pear_04.png"
    ],
    "rtdmd": [
      "/media/comparisons/pear/rtdmd/pear_01.png",
      "/media/comparisons/pear/rtdmd/pear_02.png",
      "/media/comparisons/pear/rtdmd/pear_03.png",
      "/media/comparisons/pear/rtdmd/pear_04.png"
    ],
    "smd": [
      "/media/comparisons/pear/smd/pear_01.png",
      "/media/comparisons/pear/smd/pear_02.png",
      "/media/comparisons/pear/smd/pear_03.png",
      "/media/comparisons/pear/smd/pear_04.png"
    ]
  },
  "pmd": [
    "/media/comparisons/pear/pmd/pear_03.png",
    "/media/comparisons/pear/pmd/pear_12.png",
    "/media/comparisons/pear/pmd/pear_05.png",
    "/media/comparisons/pear/pmd/pear_15.png",
    "/media/comparisons/pear/pmd/pear_01.png",
    "/media/comparisons/pear/pmd/pear_02.png",
    "/media/comparisons/pear/pmd/pear_04.png",
    "/media/comparisons/pear/pmd/pear_06.png",
    "/media/comparisons/pear/pmd/pear_07.png",
    "/media/comparisons/pear/pmd/pear_08.png",
    "/media/comparisons/pear/pmd/pear_09.png",
    "/media/comparisons/pear/pmd/pear_10.png",
    "/media/comparisons/pear/pmd/pear_11.png",
    "/media/comparisons/pear/pmd/pear_13.png",
    "/media/comparisons/pear/pmd/pear_14.png",
    "/media/comparisons/pear/pmd/pear_16.png"
  ]
} as const;
