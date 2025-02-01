import {city} from './documents/city'
import {property} from './documents/property'
import {propertyAmenity} from './documents/propertyAmenity'
import {address} from './objects/address'
import blockContent from './objects/blockContent'
import {contact} from './objects/contact'
import {locality} from './documents/locality'
import {seo} from './objects/seo'
import {faq} from './objects/faq'
// import {faqGroup} from './documents/faqGroup'

export const schemaTypes = [
  // Object Schema Types
  blockContent,
  seo,
  address,
  contact,
  faq,
  // Document Schema Types
  city,
  locality,
  property,
  propertyAmenity,
  // faqGroup,
  // Singleton Schema Types
]
