/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

// import { codeInput } from '@sanity/code-input';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
// import { media } from 'sanity-plugin-media';

// import { settingsPlugin, settingsStructure } from '~/sanity/plugins/settings';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
// import settingsType from './sanity/schemas/settings';
// import { schema } from './schema';
import post, { readingTimeType } from './schemas/post';
import category from './schemas/category';
import blockContent from './schemas/blockContent';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    types: [readingTimeType, post, category, blockContent],
  },
  plugins: [
    deskTool({
      //   structure: settingsStructure(settingsType),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: '2023-7-23' }),
    // settingsPlugin({
    //   type: settingsType.name,
    // }),
    // media(),
    // codeInput(),
  ],
});
