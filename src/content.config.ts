import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/data/works' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featured: z.boolean().optional(),
    tech_stack: z.array(z.string()),
    main_image: z.string().optional(),
    images: z.array(z.string()),
  }),
});

export const collections = { works };
