import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectType',
  title: 'Project Type',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
     defineField({
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {source: 'title', maxLength: 96},
          validation: (Rule) => Rule.required(),
        }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
