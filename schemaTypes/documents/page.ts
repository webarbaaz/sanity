import {defineField, defineType} from 'sanity'

export const page = defineType({
  type: 'document',
  name: 'page',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block', // Rich text with typography
        },
        {
          type: 'image', // Image support
          fields: [
            {
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              description: 'Important for accessibility and SEO',
            },
          ],
        },
      ],
    }),
  ],
})
