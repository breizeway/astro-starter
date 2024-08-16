import { z, defineCollection } from "astro:content";

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
        })
      )
      .optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  aboutPage: aboutPageCollection,
};
