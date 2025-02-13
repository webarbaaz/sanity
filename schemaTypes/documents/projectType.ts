import {defineType} from 'sanity'

export default defineType({
  name: 'projectType',
  title: 'Project Type',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
})
