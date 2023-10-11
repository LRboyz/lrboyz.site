import { GetPostParams, dataMeta, getPosts } from '~/sanity/queries'
import { create } from 'zustand'
// import { createJSONStorage, persist } from 'zustand/middleware'
import { Post } from '~/sanity/schemas/post'

export interface PostState {
  posts: Post[]
  meta: dataMeta
  isFeching: boolean
  setPosts: (posts: Post[], meta: dataMeta) => void
  fetchPosts: (params: GetPostParams) => Promise<void>
}

export const usePostStore = create<PostState>()(
  // persist(
  (set, get) => ({
    posts: [],
    meta: {
      total: 0
    },
    isFeching: false,
    setPosts: (posts: Post[], meta: dataMeta) => {
      set(prev => ({
        ...prev,
        posts,
        meta
      }))
    },
    fetchPosts: async (params: GetPostParams) => {
      set({ isFeching: true })
      const { data, meta } = await getPosts({ ...params })
      set(prev => ({ posts: [...prev.posts, ...data], meta, isFeching: false }))
    }
  })
)
