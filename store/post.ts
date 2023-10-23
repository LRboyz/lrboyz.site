import { GetPostParams, dataMeta, fetchPosts, fetchPostsByTag } from '~/sanity/queries'
import { create } from 'zustand'
// import { createJSONStorage, persist } from 'zustand/middleware'
import { Post } from '~/sanity/schemas/post'

export interface Paginate {
  pageSize: number
  page: number
  total: number
}
export interface PostState {
  posts: Post[]
  loading: boolean
  setPosts: (posts: Post[]) => void
  getPosts: (params: GetPostParams) => Promise<void>
  paginate: Paginate
  setPaginate: (page: number) => void
}
const initialMeta = {
  total: 0
}

export const usePostStore = create<PostState>()(
  // persist(
  (set, get) => ({
    posts: [],
    meta: initialMeta,
    loading: false,
    paginate: {
      page: 1,
      pageSize: 5,
      total: 0
    },
    setPaginate: page =>
      set({
        paginate: {
          ...get().paginate,
          page
        }
      }),
    setPosts: (posts: Post[]) => set(prev => ({ ...prev, posts })),
    getPosts: async (params: GetPostParams) => {
      const { page = 1 } = params
      const isRestart = !page && page === 1
      const isLoadMore = !isRestart && page! > 1

      const offset = (page - 1) * get().paginate.pageSize
      const limit = offset + 5

      // console.log(params, '============= PARAMS ===================')
      if (isRestart) {
        set({
          paginate: {
            page: 1,
            pageSize: 5,
            total: 0
          },
          posts: []
        })
      }
      // console.log(get())
      // console.log(params, 'params-----')
      set({ loading: true })
      const { tag } = params
      const fetcher = tag ? fetchPostsByTag : fetchPosts
      fetcher({ limit, offset, ...params }).then(response => {
        if (isLoadMore) {
          set(prev => ({
            posts: [...prev.posts, ...response.data],
            paginate: {
              ...get().paginate,
              total: response.meta.total
            },
            loading: false
          }))
        } else {
          set(prev => ({
            posts: [...response.data],
            paginate: {
              ...get().paginate,
              total: response.meta.total
            },
            loading: false
          }))
        }
      })
    }
  })
)
