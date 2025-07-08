import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/data/works' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featured: z.boolean().optional(),
    techStack: z.array(z.string())
  }),
});

export const collections = { works };
