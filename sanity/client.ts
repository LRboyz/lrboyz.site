import { createClient } from 'next-sanity'
import { cache } from 'react'
import { apiVersion, dataset, projectId, useCDN } from './config'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: useCDN
})

// Wrap the cache function in a way that reuses the TypeScript definitions
export const fetcher = cache(client.fetch.bind(client))
