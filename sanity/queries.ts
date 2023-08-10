import { groq } from 'next-sanity'
import { getDate } from '~/lib/date'
import { fetcher } from './client'
import { Post, PostDetail } from './schemas/post'
import { getPostsQuery, getPostsBySlugQuery, getHotPostsQuery } from './groq'
import { DEFAULT_ARTICLE_OFFSET } from '~/constants/state'

export type GetPostParams = {
  limit?: number
  pageIndex?: number
  forDisplay?: boolean
  lastPostId?: string
}
// path()
// ID 也被视为路径，以句点分隔。您可以使用它来将文档组织到命名空间中，方法是使用类似于animal.mammal.dog计算机上的文件夹的 ID。请注意，路径段不能以（破折号）字符开头-。例如，adog.-abcde-12345是一个无效的 ID。
// GROQ 提供了一个path()功能，允许您按路径过滤文档，例如使用 来获取所有哺乳动物_id in path("animal.mammal.*")或使用 来获取所有动物_id in path("animal.**")。在路径表达式中，*表示“直到下一个句点的任何内容”，而**表示“包括句点的任何内容”。该path()函数当前仅适用于_id属性，因为它需要特殊索引。
// Sanity 还使用路径来存储数据集中的各种内部数据。例如，组等内部对象存储在该_.路径下，内容工作室将草稿文档存储在该drafts.路径下。
/*  defined(): 函数接受任何参数并计算它是 true, false, 还是 NULL ： */
/* drafts.** 过滤掉非草稿的文章 */
export const getPosts = async ({ pageIndex = 0, limit = DEFAULT_ARTICLE_OFFSET }: GetPostParams) => {
  const result = await fetcher<Post[]>(getPostsQuery, { pageIndex, limit })
  return result
}

export const getHotPosts = async ({ pageIndex = 0, limit = DEFAULT_ARTICLE_OFFSET }: GetPostParams) => {
  const result = await fetcher<Post[]>(getHotPostsQuery, { pageIndex, limit })
  return result
}

// export const getMorePosts = ({ limit, pageIndex }: GetPostParams) =>
//   fetcher<Post[]>(getPostPaginateQuery, { limit, pageIndex })

export const getPostBySlug = (slug: string) => fetcher<PostDetail>(getPostsBySlugQuery, { slug })
