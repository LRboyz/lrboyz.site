import { GetPostParams, fetchPosts, fetchPostsByTag } from '~/sanity/queries'
import { create } from 'zustand'
import { Post, PostDetail } from '~/sanity/schemas/post'

export interface Paginate {
  pageSize: number
  page: number
}
export interface PostState {
  posts: Post[]
  loading: boolean
  getPosts: (params: GetPostParams) => Promise<void>
  paginate: Paginate
  currPost: Partial<PostDetail>
  setCurrPost: (post: PostDetail) => void
}
const initialPaginate = {
  page: 1,
  pageSize: 5,
  total: 0
}

export const usePostStore = create<PostState>()((set, get) => ({
  posts: [],
  paginate: initialPaginate,
  loading: false,
  currPost: {},
  getPosts: async (params: GetPostParams) => {
    const { page = 1 } = params
    const isRestart = !page && page === 1
    const isLoadMore = !isRestart && page! > 1

    const offset = (page - 1) * get().paginate?.pageSize!
    const limit = offset + 5

    if (isRestart) {
      set({
        paginate: initialPaginate,
        posts: []
      })
    }

    const { tag } = params
    const fetcher = tag ? fetchPostsByTag : fetchPosts

    set({ loading: true })
    fetcher({ limit, offset, ...params })
      .then(response => {
        if (isLoadMore) {
          set(prev => ({
            posts: [...prev.posts, ...response.data],
            paginate: {
              ...get().paginate,
              total: response.paginate.total
            }
          }))
        } else {
          set(prev => ({
            posts: [...response.data],
            paginate: {
              ...get().paginate,
              total: response.paginate.total
            }
          }))
        }
      })
      .finally(() => set({ loading: false }))
  },
  setCurrPost: (post: PostDetail) => set({ currPost: post })
}))
