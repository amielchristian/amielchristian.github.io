import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/data/works' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    isFeatured: z.boolean().optional(),
    techStack: z.array(z.string()),
    repository: z.string().optional(),
    liveDemo: z.string().optional(),
  }),
});

export const collections = { works };
