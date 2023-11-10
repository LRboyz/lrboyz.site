import { create } from 'zustand'
import { persist, createJSONStorage, devtools } from 'zustand/middleware'

interface VotesState {
  likePosts: string[]
  likeComments: string[]
  handleLikePost: (post_id: string) => void
  initialVotes: () => void
}

export const useVotesStore = create<VotesState>()(
  devtools(
    persist(
      (set, get) => ({
        likePosts: [],
        likeComments: [],
        handleLikePost: (post_id: string) => {
          alert('Success!')
          set({ likePosts: [...get().likePosts, post_id] })
        },
        handleLikeComment: () => {},
        initialVotes: () => {}
      }),
      {
        name: 'votes',
        storage: createJSONStorage(() => localStorage)
      }
    )
  )
)
