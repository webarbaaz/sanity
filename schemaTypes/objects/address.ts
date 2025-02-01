import {defineType, defineField} from 'sanity'

export const address = defineType({
  title: 'Address',
  name: 'address',
  type: 'object',
  fields: [
    defineField({
      title: 'Street',
      type: 'string',
      name: 'street',
    }),
    defineField({
      title: 'City',
      type: 'string',
      name: 'city',
    }),
    defineField({
      title: 'State',
      name: 'zip',
      type: 'string',
    }),
    defineField({
      title: 'Country',
      name: 'country',
      type: 'string',
    }),
  ],
})
