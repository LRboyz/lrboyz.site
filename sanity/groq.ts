import { groq } from 'next-sanity'

export const getPostsQuery = groq`
*[_type == "post" && !(_id in path("drafts.**"))
&& defined(slug.current)][$pageIndex...$limit] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  "categories": categories[]->title,
  description,
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
  "total": count(*[_type == "post" && !(_id in path("drafts.**"))])
}`

export const getHotPostsQuery = groq`
*[_type == "post" && !(_id in path("drafts.**"))
&& defined(slug.current)][$pageIndex...$limit] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  "categories": categories[]->title,
  description,
  publishedAt,
  readingTime,
}`

export const getPostsBySlugQuery = groq`
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
}`