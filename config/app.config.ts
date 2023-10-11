export const APP_META = Object.freeze({
  title: 'lrbot.site',
  description: 'lrboyz.site description'
})

export const AUTHOR_INFO = Object.freeze({
  avatar: ''
})

export const kvKeys = {
  totalPageViews: 'total_page_views',
  lastVisitor: 'last_visitor',
  currentVisitor: 'current_visitor',
  postViews: (id: string) => `post:views:${id}`,
  postReactions: (id: string) => `post:reactions:${id}`
} as const
