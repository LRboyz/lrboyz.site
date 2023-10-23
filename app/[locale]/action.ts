'use server'

import { redis } from '~/lib/redis'

export async function fetchViews(postIdKeys: string[]) {
  const views = await redis.mget<number[]>(...postIdKeys)
  return views
}
