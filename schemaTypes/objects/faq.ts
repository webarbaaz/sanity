import {defineField, defineType} from 'sanity'

export const faq = defineType({
  type: 'object',
  name: 'faq',
  fields: [
    defineField({
      name: 'question',
      type: 'string',
    }),
    defineField({
      name: 'answer',
      type: 'text',
    }),
  ],
})
