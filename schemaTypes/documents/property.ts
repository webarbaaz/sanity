import {defineArrayMember, defineField, defineType} from 'sanity'

export const property = defineType({
  type: 'document',
  name: 'property',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectType',
      type: 'string',
      options: {
        list: [
          {title: 'property', value: 'property'},
          {title: 'project', value: 'project'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [
        {type: 'block'}, // Default text blocks
        {type: 'image'}, // Allow images inside the editor
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'array', // Multi-selectable field for property categories
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Residential', value: 'residential'},
          {title: 'Commercial', value: 'commercial'},
          {title: 'Industrial', value: 'industrial'},
          {title: 'Agricultural', value: 'agricultural'},
          {title: 'Mixed-Use', value: 'mixed-use'},
          {title: 'Luxury', value: 'luxury'},
          {title: 'Affordable', value: 'affordable'},
        ],
      },
      validation: (Rule) => Rule.required().min(1), // At least one category selection required
    }),
    defineField({
      title: 'Developer',
      name: 'developer',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Land Parcel',
      name: 'landParcel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Total Towers',
      name: 'totalTowers',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Total Floors',
      name: 'totalFloors',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   name: 'propertyType',
    //   type: 'string',
    //   options: {
    //     list: [
    //       {title: 'Residential', value: 'residential'},
    //       {title: 'Commercial', value: 'commercial'},
    //       {title: 'Land/Plot', value: 'land'},
    //     ],
    //   },
    //   validation: (Rule) => Rule.required(),
    //   initialValue: 'residential',
    // }),
    // defineField({
    //   name: 'category',
    //   title: 'Category',
    //   type: 'reference',
    //   to: [{type: 'category'}], // Ensure this matches exactly
    //   validation: (Rule) => Rule.required(),
    // }),
    defineField({
      name: 'amenities',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'propertyAmenity'}],
        },
      ],
    }),
    defineField({
      name: 'locality',
      type: 'reference',
      to: [{type: 'locality'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isFeatured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'size',
      type: 'array', // Changed from 'string' to 'array'
      of: [{type: 'string'}],
      options: {
        list: [
          {title: '1 RK', value: '1-rk'},
          {title: '1 BHK', value: '1-bhk'},
          {title: '2 BHK', value: '2-bhk'},
          {title: '3 BHK', value: '3-bhk'},
          {title: '4 BHK', value: '4-bhk'},
          {title: '5 BHK', value: '5-bhk'},
          {title: '6 BHK', value: '6-bhk'},
          {title: '7 BHK', value: '7-bhk'},
          // {title: '8 BHK', value: '8-bhk'},
          // {title: 'Farm House', value: 'farm-house'},
          // {title: 'Villa', value: 'villa'},
          // {title: 'Studio', value: 'studio'},
          // {title: 'Penthouse', value: 'penthouse'},
          // {title: 'Duplex', value: 'duplex'},
          // {title: 'Triplex', value: 'triplex'},
          // {title: 'Independent House', value: 'independent-house'},
          // {title: 'Apartment', value: 'apartment'},
          // {title: 'Flat', value: 'flat'},
          // {title: 'Builder Floor', value: 'builder-floor'},
          // {title: 'Office', value: 'office'},
          // {title: 'Shop', value: 'shop'},
          // {title: 'Showroom', value: 'showroom'},
          // {title: 'Warehouse', value: 'warehouse'},
          // {title: 'Godown', value: 'godown'},
          // {title: 'Land', value: 'land'},
          // {title: 'Plot', value: 'plot'},
          // {title: 'Agricultural Land', value: 'agricultural-land'},
          // {title: 'Commercial Land', value: 'commercial-land'},
          // {title: 'Industrial Land', value: 'industrial-land'},
          // {title: 'Residential Land', value: 'residential-land'},
          // {title: 'Farm Land', value: 'farm-land'},
        ],
      },
      validation: (Rule) => Rule.required().min(1), // Ensures at least one selection
    }),

    defineField({
      name: 'carpetArea',
      type: 'string',
      description: 'Size in square feet',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'propertyStatus',
      type: 'string',
      options: {
        list: [
          {title: 'For Sell', value: 'for-sell'},
          {title: 'For rent', value: 'for-rent'},
          {title: 'Under Construction', value: 'under-construction'},
          {title: 'Ready To Move', value: 'ready-to-move'},
          {title: 'New Project', value: 'new-project'},
        ],
      },
    }),
    defineField({
      name: 'possessionDate',
      description:
        "The date when the property will be available for possession, if immediate possession, select today's date",
      type: 'date',
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'price',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Price in INR',
    }),
  ],
})
