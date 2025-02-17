import {city} from './documents/city'
import {property} from './documents/property'
import {propertyAmenity} from './documents/propertyAmenity'
import {address} from './objects/address'
import blockContent from './objects/blockContent'
import {contact} from './objects/contact'
import {locality} from './documents/locality'
import {seo} from './objects/seo'
import {faq} from './objects/faq'
import {page} from './documents/page'
import projectType from './documents/projectType'
import {category} from './documents/category'
import { review } from './documents/review'
import { lead } from './documents/lead'
// import {faqGroup} from './documents/faqGroup'

export const schemaTypes = [
  // Object Schema Types
  blockContent,
  seo,
  address,
  contact,
  faq,
  // Document Schema Types
  lead,
  city,
  locality,
  property,
  propertyAmenity,
  page,
  projectType,
  category,
  review,
  // faqGroup,
  // Singleton Schema Types
]
