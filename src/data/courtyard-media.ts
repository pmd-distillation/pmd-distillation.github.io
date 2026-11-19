// courtyard results (prompt 15), four images per batch. Baselines: seeds 50-53, exact short prompt.
// FLUX.2 [klein] base 50 steps CFG 4; FLUX.2 [klein] 4-step; RTDMD 4-step; SMD teacher-4b 4-step.
// PMD: Hidir/PMD FLUX2_Klein_4B/ckpt1500_B16_D4_G0.75_512x512, 4 steps, seeds 50-65 (file NN = seed 49+NN).
// PMD first batch hand-picked for diversity (seeds 51, 59, 57, 53); the rest in seed order.
export const courtyardComparisonMedia = {
  "competitors": {
    "flux-klein-50x2": [
      "/media/comparisons/courtyard/klein-base-50x2/courtyard_01.png",
      "/media/comparisons/courtyard/klein-base-50x2/courtyard_02.png",
      "/media/comparisons/courtyard/klein-base-50x2/courtyard_03.png",
      "/media/comparisons/courtyard/klein-base-50x2/courtyard_04.png"
    ],
    "flux-klein-4": [
      "/media/comparisons/courtyard/klein-4step/courtyard_01.png",
      "/media/comparisons/courtyard/klein-4step/courtyard_02.png",
      "/media/comparisons/courtyard/klein-4step/courtyard_03.png",
      "/media/comparisons/courtyard/klein-4step/courtyard_04.png"
    ],
    "rtdmd": [
      "/media/comparisons/courtyard/rtdmd/courtyard_01.png",
      "/media/comparisons/courtyard/rtdmd/courtyard_02.png",
      "/media/comparisons/courtyard/rtdmd/courtyard_03.png",
      "/media/comparisons/courtyard/rtdmd/courtyard_04.png"
    ],
    "smd": [
      "/media/comparisons/courtyard/smd/courtyard_01.png",
      "/media/comparisons/courtyard/smd/courtyard_02.png",
      "/media/comparisons/courtyard/smd/courtyard_03.png",
      "/media/comparisons/courtyard/smd/courtyard_04.png"
    ]
  },
  "pmd": [
    "/media/comparisons/courtyard/pmd/courtyard_02.png",
    "/media/comparisons/courtyard/pmd/courtyard_10.png",
    "/media/comparisons/courtyard/pmd/courtyard_08.png",
    "/media/comparisons/courtyard/pmd/courtyard_04.png",
    "/media/comparisons/courtyard/pmd/courtyard_01.png",
    "/media/comparisons/courtyard/pmd/courtyard_03.png",
    "/media/comparisons/courtyard/pmd/courtyard_05.png",
    "/media/comparisons/courtyard/pmd/courtyard_06.png",
    "/media/comparisons/courtyard/pmd/courtyard_07.png",
    "/media/comparisons/courtyard/pmd/courtyard_09.png",
    "/media/comparisons/courtyard/pmd/courtyard_11.png",
    "/media/comparisons/courtyard/pmd/courtyard_12.png",
    "/media/comparisons/courtyard/pmd/courtyard_13.png",
    "/media/comparisons/courtyard/pmd/courtyard_14.png",
    "/media/comparisons/courtyard/pmd/courtyard_15.png",
    "/media/comparisons/courtyard/pmd/courtyard_16.png"
  ]
} as const;
