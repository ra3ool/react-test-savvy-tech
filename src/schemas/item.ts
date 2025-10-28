import { z } from 'zod';

export const itemSchema = z.object({
  title: z
    .string()
    .min(3, 'Title must be at least 3 character')
    .max(100, 'Title is too long'),
  subTitle: z
    .string()
    .min(1, 'Subtitle is required')
    .max(200, 'Subtitle is too long'),
});
