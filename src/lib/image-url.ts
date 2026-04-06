import { createImageUrlBuilder } from '@sanity/image-url'
import { client } from './sanity'

const builder = client ? createImageUrlBuilder(client) : null

export function urlFor(source: any) {
  if (!builder) {
    return { width: () => ({ height: () => ({ url: () => '' }) }) }
  }
  return builder.image(source)
}
