// Wan2.1 1.3B text-to-video comparisons (81 frames, 832×480, 16 fps).
// PMD clips are 3 picks from the 8-seed band-checkpoint-200 renders; baselines are their first 3 samples.
// A model without a folder entry renders placeholders.

export type VideoCompetitorId = 'teacher-50x2' | 'dmd2' | 'anyflow' | 'pdd';

export type VideoCompetitor = {
  id: VideoCompetitorId;
  label: string;
  rowLabel: string;
  detail?: string;
  folder?: string;
};

export const videoCompetitors: readonly VideoCompetitor[] = [
  // Teacher: Wan2.1-T2V-1.3B with the official Wan2.1 T2V defaults (UniPC, shift 5, 50 steps, CFG 5.0, official
  // negative prompt), seeds 0-2.
  { id: 'teacher-50x2', label: 'Teacher 50×2', rowLabel: 'Teacher', detail: '50×2', folder: 'teacher' },
  { id: 'dmd2', label: 'DMD2', rowLabel: 'DMD2', detail: '4-step', folder: 'dmd2' },
  { id: 'anyflow', label: 'AnyFlow', rowLabel: 'AnyFlow', detail: '4-step', folder: 'anyflow' },
  // PDD clips come from the PDD project page (Wan2.1 14B T2V table, PDD 4 NFE), matched by exact prompt text.
  { id: 'pdd', label: 'PDD', rowLabel: 'PDD', detail: '4-step · 14B', folder: 'pdd' },
];

export const defaultVideoCompetitor = videoCompetitors.find(item => item.id === 'dmd2') ?? videoCompetitors[0];

export const videoSampleCount = 3;

export type VideoPrompt = { id: string; slug: string; summary: string; full: string };

export const videoPrompts: readonly VideoPrompt[] = [
  { id: '01', slug: 'corgi_drums', summary: 'a corgi playing a drum kit',
    full: "A playful Welsh Corgi is energetically playing a drum kit. The corgi is standing on its hind legs, front paws rhythmically hitting the snare drum and cymbals. Its ears are perked up, and its tail is wagging excitedly. The corgi's expressive face shows joy and concentration as it plays. The drum kit is brightly lit against a plain background, focusing all attention on the corgi's performance. Medium close-up view, capturing the corgi's focused expression and active paws." },
  { id: '02', slug: 'koala_piano', summary: 'a koala playing a grand piano in the forest',
    full: 'A koala bear playing a grand piano in a lush, dense forest. The koala has soft, grey fur and large, round ears. It sits upright on the piano bench, paws delicately placed on the keys, creating gentle melodies. The forest background is filled with tall eucalyptus trees, dappled sunlight filtering through the leaves, and a carpet of green moss beneath the piano. The scene is calm and serene, with the koala focused intently on its performance. Medium close-up shot, capturing the koala and part of the forest surroundings.' },
  { id: '03', slug: 'digging', summary: 'a person digging in a sunny field',
    full: "A person is digging in a sunny, rural field. They are wearing a brown work jacket, blue jeans, and a straw hat to protect themselves from the sun. Their face is covered with sweat, and they have a determined look as they focus intently on the task. The person uses a shovel with strong, repetitive motions, throwing dirt to the side. The field has tall grass and scattered wildflowers in the background. The scene is captured in a mid-shot, focusing on the person's upper body and the immediate area where they are digging. The camera remains static to highlight the continuous action of digging." },
  { id: '04', slug: 'petting_dog', summary: 'a person petting a dog in the park',
    full: 'A person with warm, gentle facial expressions is petting a friendly, medium-sized dog. The person is standing with a relaxed posture, one hand gently resting on the dog’s head, while the other hand strokes its fur. The dog has a playful demeanor, wagging its tail happily. Both the person and the dog are in a green park setting with patches of grass and trees in the background. The scene is captured from a mid-shot perspective, focusing on the interaction between the two, with no camera movement.' },
  { id: '05', slug: 'ice_skating', summary: 'a person ice skating on a frozen lake',
    full: 'A person is ice skating on a smooth, icy lake under a clear winter sky. They are wearing a black helmet, a bright red parka, and matching red gloves and skates. The person glides gracefully across the ice, arms extended slightly for balance. Snowflakes gently fall around them, creating a serene and wintery atmosphere. The scene is captured in a medium shot from a static camera angle, emphasizing the fluid motion of the skater.' },
  { id: '06', slug: 'kite', summary: 'a person flying a kite in a sunny park',
    full: 'A person is flying a kite in a sunny park. The person, a young adult with medium-length brown hair, is standing on lush green grass under a clear blue sky. They are holding the kite string tightly in their right hand, with a joyful smile on their face. The kite, a traditional diamond-shaped design with vibrant colors, is soaring high in the air, gently swaying with the wind. In the background, there are other people enjoying the park, walking their dogs, and playing with children. The scene is captured in a mid-shot, focusing on the person and the kite, with a slight upward angle to emphasize the height of the kite.' },
  { id: '07', slug: 'cat_park', summary: 'a playful cat exploring a sunny park',
    full: "A playful cat exploring a sunny park. The cat is brown with white spots, running and jumping between patches of grass and under a large oak tree. It occasionally stops to sniff at flowers or chase after butterflies. The park is filled with lush greenery, including various bushes and tall trees, creating a vibrant and lively environment. The background shows children playing on a playground and people walking their dogs. The scene captures the cat in various playful postures, from a curious crouch to a joyful leap. Medium shot, capturing the cat's dynamic movements and interactions with the park environment." },
  { id: '08', slug: 'beach', summary: 'a coastal beach in springtime',
    full: 'A beautiful coastal beach during springtime, where gentle waves lap against the soft golden sand. The scene transitions smoothly from a clear blue ocean to the vibrant green foliage of palm trees on the shore, creating a captivating rack focusing effect. The sun casts a warm glow, illuminating the serene waters and casting dappled shadows through the trees. The air is filled with the sounds of seagulls and the rhythmic crashing of waves. The background showcases rolling hills covered in lush vegetation, adding depth to the picturesque landscape. Wide shot capturing the expansive beauty of the coastline.' },
  { id: '09', slug: 'ironing', summary: 'a person ironing clothes in a living room',
    full: 'A person is ironing clothes in a cozy living room. The individual, who appears to be in their mid-thirties, is wearing casual clothing and has a focused expression. They are using a steam iron on a white cotton shirt, carefully smoothing out wrinkles. The ironing board is set up next to a comfortable armchair, with a window behind them letting in soft natural light. The background includes a small bookshelf and some houseplants. The scene focuses on the detailed actions of ironing, showing the hand movements and the interaction between the person and the garment. Medium close-up shot, static.' },
  { id: '10', slug: 'cow_barn', summary: 'a cow resting in a quiet barn',
    full: 'A peaceful, tranquil barn interior with a single cow resting in the foreground. The cow is lying down, chewing its cud slowly and steadily, with a calm and content expression. The barn has wooden walls and a rustic wooden floor, with hay bales and farm tools scattered around. Soft natural light filters through small windows, casting gentle shadows. The background includes a few other sleeping animals and a cozy corner with a feeding trough. Medium shot, static scene focusing on the cow’s relaxed posture and rhythmic chewing motion.' },
];

export function videoSource(prompt: VideoPrompt, competitor: VideoCompetitor, method: 'competitor' | 'pmd', index: number) {
  const folder = method === 'pmd' ? 'pmd' : competitor.folder;
  return folder ? `/media/videos/${prompt.slug}/${folder}/${index}.mp4` : undefined;
}
