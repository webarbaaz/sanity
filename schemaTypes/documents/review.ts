// schemas/review.js
import { defineField, defineType } from 'sanity'

export const review = defineType({
  name: 'review',
  type: 'document',
  title: 'Review',
  fields: [
    defineField({
      name: 'author',
      type: 'string',
      title: 'Author Name',
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Rating',
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'reviewText',
      type: 'text',
      title: 'Review Text',
      validation: (Rule) => Rule.required().min(10).max(500),
    }),
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'rating',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title,
        subtitle: `${subtitle} stars`,
      }
    },
  },
})
