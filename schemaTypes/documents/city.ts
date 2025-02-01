import {defineField, defineType} from 'sanity'

export const city = defineType({
  title: 'City',
  name: 'city',
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
