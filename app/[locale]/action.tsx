'use server'

import { redis } from '~/lib/redis'
import { getPosts } from '~/sanity/queries'

interface actionProps {
  limit: number
  skip: number
}

export async function fetchPosts({ skip, limit }: actionProps) {
  const { data, meta } = await getPosts({ skip, limit })
  return {
    total: meta.total,
    data
  }
}

export async function fetchViews(postIdKeys: string[]) {
  const views = await redis.mget<number[]>(...postIdKeys)
  return views
}
