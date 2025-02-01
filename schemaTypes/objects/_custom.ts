export const customImage = {
  name: 'customImage',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Alternative Text',
      name: 'alt',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
}

export const customScript = {
  title: 'Script',
  name: 'customScript',
  type: 'object',
  fields: [
    {
      title: 'ID',
      name: 'id',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Value',
      name: 'value',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
