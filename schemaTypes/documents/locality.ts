import {defineField, defineType} from 'sanity'

export const locality = defineType({
  type: 'document',
  name: 'locality',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'city',
      type: 'reference',
      to: [{type: 'city'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nearByLocalities',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'locality'}]}],
    }),
  ],
  preview: {
    select: {
      title: 'name.current',
      subtitle: 'city.name.current',
    },
  },
})
