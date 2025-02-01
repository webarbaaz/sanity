import {defineType, defineField, defineArrayMember} from 'sanity'

export const seo = defineType({
  type: 'object',
  name: 'seo',
  fields: [
    defineField({
      type: 'string',
      name: 'metaTitle',
    }),
    defineField({
      type: 'text',
      name: 'metaDescription',
    }),
    defineField({
      type: 'image',
      name: 'shareImage',
      options: {hotspot: true},
    }),
    defineField({
      type: 'array',
      name: 'tags',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
    }),
  ],
})
