import { create } from 'zustand'
import { Tag } from '~/sanity/schemas/tag'
// import { createJSONStorage, persist } from 'zustand/middleware'

export interface TagState {
  Tags: Tag[]
  setTags: (Tags: Tag[]) => void
}

export const useTagStore = create<TagState>()(
  // persist(
  (set, get) => ({
    Tags: [],
    setTags: (Tags: Tag[]) => {
      set(prev => ({ ...prev, Tags }))
    }
  })
)
