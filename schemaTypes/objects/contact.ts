import {defineType, defineField} from 'sanity'

export const contact = defineType({
  title: 'Contact',
  name: 'contact',
  type: 'object',
  fields: [
    defineField({
      title: 'Email',
      name: 'email',
      type: 'string',
    }),
    defineField({
      title: 'Phone',
      name: 'phone',
      type: 'string',
    }),
    defineField({
      title: 'Alternate Phone',
      name: 'alternatePhone',
      type: 'string',
    }),
    defineField({
      name: 'address',
      type: 'address',
    }),
  ],
})
