/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { codeInput } from '@sanity/code-input'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { media } from 'sanity-plugin-media'
import { schema } from './sanity/schema'

// import { settingsPlugin, settingsStructure } from '~/sanity/plugins/settings'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
// import { apiVersion, dataset, projectId } from './sanity/env'
// import { schema } from './sanity/schema'
// import settingsType from './sanity/schemas/settings'

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({
    //   structure: settingsStructure(settingsType),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: '2023-07-26' }),
    // settingsPlugin({
    //   type: settingsType.name,
    // }),
    media(),
    codeInput(),
  ],
})
