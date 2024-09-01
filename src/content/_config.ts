import { defineCollection, z } from "astro:content";

const aboutPageCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    intro: z.string(),
    team: z
      .array(
        z.object({
          name: z.string(),
          position: z.string(),
          photo: z.string(),
        }),
      )
      .optional(),
  }),
});

// key should match dir name
export const collections = {
  about: aboutPageCollection,
};

// run `npm run astro sync` after making any changes to this file
