import {defineField, defineType} from 'sanity'

export const propertyAmenity = defineType({
  title: 'Property Amenity',
  name: 'propertyAmenity',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Icon',
      name: 'icon',
      type: 'iconPicker',
      options: {
        providers: ['f7', 'fa', 'mdi', 'sa', 'hi', 'fi', 'si'],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name.current',
    },
  },
})
