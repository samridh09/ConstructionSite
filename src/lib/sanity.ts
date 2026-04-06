import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const client = projectId && projectId !== 'your_project_id_here' ?
  createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    useCdn: true,
  })
  : null

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: {
  query: string
  params?: Record<string, any>
  tags?: string[]
}): Promise<T> {
  if (!client) {
    console.warn('Sanity client not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local')
    return [] as unknown as T
  }

  return client.fetch<T>(query, params, {
    next: {
      revalidate: 60,
      tags,
    },
  })
}
