// schemas/lead.js

export const lead = {
    name: 'lead',
    title: 'Leads',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'phone',
        title: 'Phone',
        type: 'string',
      },
      {
        name: 'propertySlug',
        title: 'Property Slug',
        type: 'string',
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
      }
    ]
  }
  

//   import {defineField, defineType} from 'sanity'
  
//   export const leads = defineType({
//     name: 'lead',
//     title: 'Lead',
//     type: 'document',
//     fields: [
//       defineField({
//         name: 'name',
//         title: 'Name',
//         type: 'string',
//         validation: (Rule) => Rule.required(),
//       }),
//       defineField({
//         name: 'email',
//         title: 'Email',
//         type: 'string',
//         validation: (Rule) => Rule.required(),
//       }),
//       defineField({
//         name: 'email',
//         title: 'Email',
//         type: 'string',
//         validation: (Rule) => Rule.required(),
//       }),
//     ],
//     preview: {
//       select: {
//         title: 'name',
//       },
//     },
//   })
  