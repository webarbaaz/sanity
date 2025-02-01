import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {iconPicker} from 'sanity-plugin-icon-picker'

export default defineConfig({
  name: 'default',
  title: 'value properties',
  projectId: 'lv6nqjq3',
  dataset: 'production',
  plugins: [structureTool(), visionTool(), iconPicker()],
  schema: {
    types: schemaTypes,
  },
})