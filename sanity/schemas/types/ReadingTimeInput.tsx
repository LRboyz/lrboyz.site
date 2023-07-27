import { defineType } from 'sanity'

import ReadingTimeInput from '~/sanity/components/ReadingTimeInput'

export const readingTimeType = defineType({
  name: 'readingTime',
  title: 'Reading Time',
  description: '给定内容的估计阅读时间（分钟）',
  type: 'number',
  components: {
    input: ReadingTimeInput,
  },
})
