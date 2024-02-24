import { defineConfig, InferSchemaValues } from '@sanity-typed/types'
import { createClient } from '@sanity-typed/client'

const config = defineConfig({
  dataset: 'stub',
  projectId: 'stub',
  title: 'stub',
  schema: {
    types: [
      {
        type: 'document',
        name: 'post',
        fields: [
          {
            type: 'string',
            name: 'slug',
          },
          {
            type: 'string',
            name: 'title',
          },
        ],
      },
    ],
  },
  plugins: [],
})

export type SanityValues = InferSchemaValues<typeof config>

const client = createClient<SanityValues>({
  projectId: 'stub',
  dataset: 'stub',
})

const label = await client.fetch(`*[_type == 'post'][0] { _id, slug, title, _createdAt }`)

// eslint-disable-next-line no-console
console.log({
  id: label._id,
  slug: label.slug.current,
  title: label.title,
  createdAt: label._createdAt,
})
