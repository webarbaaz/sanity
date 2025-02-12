import {defineField, defineType} from 'sanity'

export const category = defineType({
  title: 'Category',
  name: 'category',
  type: 'document',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string', // Changed from "slug" to "string"
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
