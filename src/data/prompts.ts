export type Prompt = {
  id: string;
  summary: string;
  full: string;
};

// Display order (Tokyo first). `id` is the media key, not the shown number; the gallery numbers prompts by position.
export const prompts: readonly Prompt[] = [
  {
    id: '03',
    summary: "A pretty girl in tokyo, 80's",
    full: "A pretty girl in tokyo, 80's",
  },
  {
    id: '01',
    summary: 'a cat in the house',
    full: 'a cat in the house',
  },
  {
    id: '02',
    summary: 'a dog in the park',
    full: 'a dog in the park',
  },
  {
    id: '04',
    summary: 'A cloaked traveler on a snowy mountain pass.',
    full: 'Cinematic close-up portrait of a cloaked traveler standing on a mountain pass, snow swirling in the air, distant peaks behind her, wind-tousled hair, cold blue tones, quiet sense of endurance and journey',
  },
  {
    id: '05',
    summary: 'A robin in a knitted bobble hat.',
    full: 'A small robin wearing a cozy knitted bobble hat, perched on a bare branch on a quiet day.',
  },
  {
    id: '06',
    summary: 'A moon jellyfish drifting through deep navy water.',
    full: 'A single moon jellyfish drifts upward through deep navy water, its translucent bell glowing faintly violet and four pale rings visible inside. Center it in a square frame with long trailing tentacles fading into darkness below.',
  },
  {
    id: '07',
    summary: 'A nightmarish child scribble of Mike Wazowski.',
    full: 'Scary chaotic scribbles of a nightmarish drawing of Mike Wazowski, done by a 3 year old on white construction paper',
  },
  {
    id: '08',
    summary: "Extreme close-up of a red fox's frosted amber eye.",
    full: "Extreme close-up of a red fox's amber eye and the russet fur around it, individual hairs tipped with frost. Horizontal macro framing, the eye placed on the right third, cool blue winter light reflecting in the pupil.",
  },
  {
    id: '09',
    summary: 'A baby cat taking a skydiving selfie.',
    full: 'Surreal pov selfie shot from a cute baby cat with a parachute during a skydiving adventure. the breathtaking aerial perspective shows a alpine landscape. the cute baby cat fur ripples chaotically in the extreme wind, and its wide-open mouth reveals an expression of both exhilaration and absurdity. its lips and cheeks flutter wildly as the intense winds distort its face in humorous, exaggerated ways.',
  },
  {
    id: '10',
    summary: "A marble Greek statue comforting a big-headed cat.",
    full: "A classic Greek statue carved from white marble, depicting a muscular man with a stern expression as he gently comforts a cat with an unusually large head. The cat, also sculpted from marble, seems to be at ease in the man's strong arms. The statue stands on a stone pedestal, and the intricate details of the man's curly hair and the cat's fur texture are visible, highlighting the sculptor's skilled craftsmanship.",
  },
  {
    id: '11',
    summary: 'A field of wildflowers beneath distant mountains.',
    full: 'A field of wildflowers beneath distant mountains.',
  },
  {
    id: '12',
    summary: 'An observatory under a clear night sky.',
    full: 'An observatory under a clear night sky.',
  },
  {
    id: '13',
    summary: 'A pear and folded linen on a kitchen counter.',
    full: 'A pear and folded linen on a kitchen counter.',
  },
  {
    id: '14',
    summary: 'A weathered lighthouse above a rugged shoreline.',
    full: 'A weathered lighthouse above a rugged shoreline.',
  },
  {
    id: '15',
    summary: 'A courtyard with olive trees in afternoon light.',
    full: 'A courtyard with olive trees in afternoon light.',
  },
];
