import { groq } from 'next-sanity'
import { fetcher } from './client'
import { Post, PostDetail } from './schemas/post'
import { Tag } from './schemas/tag'
import _ from 'lodash'

export type GetPostParams = {
  limit?: number
  offset?: number
  tag?: string | string[]
  page?: number
}
export type Paginate = {
  total: number
}

export type formatData<T> = {
  data: T
  paginate: Paginate
}

export type bannerType = {
  _id: string
  title: string
  mainImage: {
    _ref: string
    asset: {
      url: string
      lqip: string
    }
  }
}

// path()
// ID 也被视为路径，以句点分隔。您可以使用它来将文档组织到命名空间中，方法是使用类似于animal.mammal.dog计算机上的文件夹的 ID。请注意，路径段不能以（破折号）字符开头-。例如，adog.-abcde-12345是一个无效的 ID。
// GROQ 提供了一个path()功能，允许您按路径过滤文档，例如使用 来获取所有哺乳动物_id in path("animal.mammal.*")或使用 来获取所有动物_id in path("animal.**")。在路径表达式中，*表示“直到下一个句点的任何内容”，而**表示“包括句点的任何内容”。该path()函数当前仅适用于_id属性，因为它需要特殊索引。
// Sanity 还使用路径来存储数据集中的各种内部数据。例如，组等内部对象存储在该_.路径下，内容工作室将草稿文档存储在该drafts.路径下。
/*  defined(): 函数接受任何参数并计算它是 true, false, 还是 NULL ： */
/* drafts.** 过滤掉非草稿的文章 */

export const fetchPosts = async ({ offset = 0, limit = 5 }: GetPostParams) =>
  fetcher<formatData<Post[]>>(
    groq`
    {
      "data": 
      *[_type == "post" && !(_id in path("drafts.**"))][${offset}...${limit}] | order(publishedAt asc) {
      _id,
      title,
      "slug": slug.current,
      "categories": categories[]-> { title },
      description,
      "tags": tags[]->{title},
      publishedAt,
      readingTime,
      mainImage {
        _ref,
        asset->{
          url,
          "lqip":metadata.lqip,
          "dominant":metadata.palette.dominant
        }
      },
    },
    "paginate":{
      "total":count(*[_type == "post" && !(_id in path("drafts.**"))] )
    }
    }
    `
  )

export const fetchPostsByTag = async ({ offset = 0, limit = 5, tag }: GetPostParams) => {
  return fetcher<formatData<Post[]>>(
    groq`
    {
      "data": 
      *[_type == "post" && $tag in tags[]->slug.current && !(_id in path("drafts.**"))][${offset}...${limit}] | order(publishedAt asc) {
      _id,
      title,
      "slug": slug.current,
      "categories": categories[]-> { title },
      description,
      "tags": tags[]->{title},
      publishedAt,
      readingTime,
      mainImage {
        _ref,
        asset->{
          url,
          "lqip":metadata.lqip,
          "dominant":metadata.palette.dominant
        }
      },
    },
    "paginate":{
      "total":count(*[_type == "post" && $tag in tags[]->slug.current && !(_id in path("drafts.**"))] )
    }
    }
    `,
    { tag }
  )
}

export const getHotPosts = async () =>
  fetcher<Post[]>(
    groq`
  *[_type == "post" && !(_id in path("drafts.**"))
  && defined(slug.current)][0...10] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    "categories": categories[]->title,
    description,
    publishedAt,
    readingTime,
  }`
  )

export const getPostBySlug = (slug: string) =>
  fetcher<PostDetail>(
    groq`
*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
  _id,
  title,
  "slug": slug.current,
  "categories": categories[]->title,
  description,
  publishedAt,
  readingTime,
  mood,
  body[] {
    ...,
    _type == "image" => {
      "url": asset->url,
      "lqip": asset->metadata.lqip,
      "dimensions": asset->metadata.dimensions,
      ...
    }
  },
  "headings": body[length(style) == 2 && string::startsWith(style, "h")],
  mainImage {
    _ref,
    asset->{
      url,
      "lqip": metadata.lqip
    }
  },
  "related": *[_type == "post" && slug.current != $slug && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc, _createdAt desc) [0..2] {
    _id,
    title,
    "slug": slug.current,
    "categories": categories[]->title,
    publishedAt,
    readingTime,
    mainImage {
      _ref,
      asset->{
        url,
        "lqip": metadata.lqip,
        "dominant": metadata.palette.dominant
      }
    },
  }
}`,
    { slug }
  )

export const getTags = async () =>
  fetcher<Tag[]>(groq`*[_type == "tag" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    icon,
    attributes,
    "article_count": count(*[_type == 'post' && references(^._id)])
  }`)
