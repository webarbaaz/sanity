import {defineArrayMember, defineField, defineType} from 'sanity'

export const faqGroup = defineType({
  type: 'document',
  name: 'faqGroup',
  fields: [
    defineField({
      name: 'name',
      type: 'slug',
      description: 'The name of the faq group ie "General", "Payment", "Booking"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sortOrder',
      type: 'number',
      description: 'The order in which the faq groups will be displayed',
    }),
    defineField({
      name: 'faqs',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'faq',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name.current',
    },
  },
})
