import { defineField, defineType } from 'sanity'
import { PencilSwooshIcon } from '~/components/icons/PencliSwooshIcon'
import { readingTimeType } from './types/ReadingTimeInput'
import { Category } from './category'
import { Tag } from './tag'

export type Post = {
  _id: string
  title: string
  slug: string
  mainImage: {
    _ref: string
    asset: {
      url: string
      lqip?: string
      dominant?: {
        background: string
        foreground: string
      }
    }
  }
  publishedAt: string
  description: string
  categories: Category[]
  tags: Tag[]
  body: any
  readingTime: number
}

export type PostDetail = Post & {
  headings: any[]
  related?: Post[]
}

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: PencilSwooshIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }]
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      description: 'This image will be used for the preview (1200 x 675px)',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }),
    defineField({
      name: 'readingTime',
      type: readingTimeType.name,
      options: {
        source: 'body'
      }
    })
  ],

  preview: {
    select: {
      title: 'title',
      author: 'slug',
      media: 'mainImage'
    }
  }
})
