'use server'

import { redis } from '~/lib/redis'
import { unstable_noStore as noStore, unstable_cache } from 'next/cache'
import { fetchPosts, fetchPostsByTag } from '~/sanity/queries'

/***** Get Post Data  *****/
export async function getPosts(params: { tag: string }) {
  noStore()
  try {
    const { tag } = params
    const fetcher = tag ? fetchPostsByTag : fetchPosts
    const posts = await fetcher({ ...params })
    return posts
  } catch (error) {
    console.error('Fetch Post Error => ', error)
    throw new Error('Failed to fetch Post Data!')
  }
}
