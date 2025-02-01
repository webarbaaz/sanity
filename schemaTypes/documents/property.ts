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
      name: 'projectName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'listedFor',
      type: 'string',
      options: {
        list: [
          {title: 'Rent', value: 'rent'},
          {title: 'Lease', value: 'lease'},
          {title: 'Sell', value: 'sell'},
          {title: 'Co-living', value: 'co-living'},
          {title: 'Guest House', value: 'guest-house'},
        ],
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'rent',
    }),
    defineField({
      name: 'type',
      type: 'string',
      options: {
        list: [
          {title: 'Residential', value: 'residential'},
          {title: 'Commercial', value: 'commercial'},
          {title: 'Land/Plot', value: 'land'},
        ],
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'residential',
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
      name: 'price',
      type: 'number',
      validation: (Rule) => Rule.required(),
      description: 'Price in INR',
      initialValue: 0,
    }),
    defineField({
      name: 'paymentInterval',
      type: 'string',
      options: {
        list: [
          {title: 'Weekly', value: 'weekly'},
          {title: 'Monthly', value: 'monthly'},
          {title: 'Quarterly', value: 'quarterly'},
          {title: 'Bi-Annually', value: 'bi-annually'},
          {title: 'Annually', value: 'annually'},
          {title: 'One Time', value: 'one-time'},
        ],
      },
      initialValue: 'per-month',
      validation: (Rule) => Rule.required(),
    }),
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
      name: 'isOnHome',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isNonVegAllowed',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'isPetsAllowed',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'size',
      type: 'string',
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
          {title: '8 BHK', value: '8-bhk'},
          {title: 'Farm House', value: 'farm-house'},
          {title: 'Villa', value: 'villa'},
          {title: 'Studio', value: 'studio'},
          {title: 'Penthouse', value: 'penthouse'},
          {title: 'Duplex', value: 'duplex'},
          {title: 'Triplex', value: 'triplex'},
          {title: 'Independent House', value: 'independent-house'},
          {title: 'Apartment', value: 'apartment'},
          {title: 'Flat', value: 'flat'},
          {title: 'Builder Floor', value: 'builder-floor'},
          {title: 'Office', value: 'office'},
          {title: 'Shop', value: 'shop'},
          {title: 'Showroom', value: 'showroom'},
          {title: 'Warehouse', value: 'warehouse'},
          {title: 'Godown', value: 'godown'},
          {title: 'Land', value: 'land'},
          {title: 'Plot', value: 'plot'},
          {title: 'Agricultural Land', value: 'agricultural-land'},
          {title: 'Commercial Land', value: 'commercial-land'},
          {title: 'Industrial Land', value: 'industrial-land'},
          {title: 'Residential Land', value: 'residential-land'},
          {title: 'Farm Land', value: 'farm-land'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'washroom',
      type: 'string',
      options: {
        list: [
          {title: 'Shared', value: 'shared'},
          {title: 'Public', value: 'public'},
          {title: 'One', value: 'one'},
          {title: 'Two', value: 'two'},
          {title: 'Three', value: 'three'},
          {title: 'Four', value: 'four'},
          {title: 'Five', value: 'five'},
          {title: 'More than Five', value: 'more-than-five'},
        ],
      },
    }),
    defineField({
      name: 'carpetArea',
      type: 'number',
      description: 'Size in square feet',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'floorNumber',
      type: 'string',
      initialValue: 'Ground',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'constructionAge',
      type: 'string',
      options: {
        list: [
          {title: 'Under Construction', value: 'under-construction'},
          {title: 'New', value: 'new'},
          {title: 'Less than 5 years old', value: 'less-than-5-years-old'},
          {title: 'Less than 10 years old', value: 'less-than-10-years-old'},
          {title: 'Less than 15 years old', value: 'less-than-15-years-old'},
          {title: 'Less than 20 years old', value: 'less-than-20-years-old'},
          {title: 'Less than 25 years old', value: 'less-than-25-years-old'},
          {title: 'Less than 30 years old', value: 'less-than-30-years-old'},
          {title: 'More than 30 years old', value: 'more-than-30-years-old'},
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
      name: 'furnishedStatus',
      type: 'string',
      initialValue: 'unfurnished',
      options: {
        list: [
          {title: 'Unfurnished', value: 'unfurnished'},
          {title: 'Semi Furnished', value: 'semi-furnished'},
          {title: 'Fully Furnished', value: 'fully-furnished'},
        ],
      },
    }),
    defineField({
      name: 'facing',
      type: 'string',
      options: {
        list: [
          {title: 'East', value: 'east'},
          {title: 'West', value: 'west'},
          {title: 'North', value: 'north'},
          {title: 'South', value: 'south'},
          {title: 'North-East', value: 'north-east'},
          {title: 'North-West', value: 'north-west'},
          {title: 'South-East', value: 'south-east'},
          {title: 'South-West', value: 'south-west'},
        ],
      },
    }),
    defineField({
      name: 'waterSupply',
      type: 'string',
      initialValue: 'corporation',
      options: {
        list: [
          {title: 'Corporation', value: 'corporation'},
          {title: 'Borewell', value: 'borewell'},
          {title: 'Tanker', value: 'tanker'},
          {title: 'Municipal', value: 'municipal'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    defineField({
      name: 'waterSupplyTime',
      type: 'string',
      initialValue: '24-hours',
      options: {
        list: [
          {title: '24 Hours', value: '24-hours'},
          {title: '12 Hours', value: '12-hours'},
          {title: '6 Hours', value: '6-hours'},
          {title: '4 Hours', value: '4-hours'},
          {title: '2 Hours', value: '2-hours'},
          {title: '1 Hour', value: '1-hour'},
          {title: 'Specific Time', value: 'specific-time'},
        ],
      },
    }),
    defineField({
      name: 'securityFeatures',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'CCTV', value: 'cctv'},
          {title: 'Security Guard', value: 'security-guard'},
          {title: 'Watch Dogs', value: 'watch-dogs'},
          {title: 'Intercom', value: 'intercom'},
          {title: 'Gated Community', value: 'gated-community'},
          {title: 'Others', value: 'others'},
        ],
      },
    }),
    defineField({
      title: 'Preferred Clients',
      name: 'preferredClients',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Family', value: 'family'},
          {title: 'Bachelors', value: 'bachelors'},
          {title: 'Company', value: 'company'},
          {title: 'Students', value: 'students'},
        ],
      },
    }),
    defineField({
      title: 'Parking Facilities',
      name: 'parkingFacilities',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Bike', value: 'bike'},
          {title: 'Car', value: 'car'},
          {title: 'Heavy Vehicles', value: 'heavy-vehicles'},
          {title: 'Docking Station', value: 'docking-station'},
        ],
      },
    }),
    defineField({
      title: 'Parking Covered Count',
      name: 'parkingCoveredCount',
      description: 'Number of covered parking spaces, if none enter 0',
      type: 'number',
      initialValue: 0,
    }),
  ],
})
