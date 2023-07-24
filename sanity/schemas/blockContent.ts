import { defineArrayMember, defineType } from 'sanity';

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        //标记使您可以在可移植文本编辑器中标记内联文本
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
        {
          name: 'label',
          type: 'string',
          title: 'Label',
        },
      ],
    }),
    // defineArrayMember({
    //   type: 'code',
    //   name: 'codeBlock',
    //   title: 'Code Block',
    //   options: {
    //     withFilename: true,
    //   },
    // }),
    // defineArrayMember({
    //   type: 'object',
    //   name: 'tweet',
    //   title: 'Tweet',
    //   fields: [
    //     {
    //       name: 'id',
    //       type: 'string',
    //       title: 'Tweet ID',
    //     },
    //   ],
    //   components: {
    //     preview: Tweet as any,
    //   },
    // }),
  ],
});
