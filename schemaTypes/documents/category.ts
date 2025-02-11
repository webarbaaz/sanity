import {defineField, defineType} from 'sanity'

export const category = defineType({
  title: 'Category',
  name: 'category',
  type: 'document',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name.current',
    },
  },
})
