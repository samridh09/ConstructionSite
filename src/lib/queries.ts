import { groq } from 'next-sanity'

export const getAllProjectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    label,
    location,
    category,
    description,
    image {
      asset,
      hotspot,
    },
    featured,
    order,
  }
`

export const getFeaturedProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(order asc) {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    label,
    location,
    category,
    description,
    image {
      asset,
      hotspot,
    },
    featured,
    order,
  }
`

export const getProjectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    label,
    location,
    category,
    description,
    image {
      asset,
      hotspot,
    },
    featured,
    order,
    gallery[] {
      asset
    }
  }
`
