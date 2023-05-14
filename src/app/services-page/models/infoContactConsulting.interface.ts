export interface IIContactInfoConsulting {
  data: DataIC[]
  meta: Meta
}

export interface DataIC {
  id: number
  attributes: Attributes
}

export interface Attributes {
  title: string
  description: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  img: Img
}

export interface Img {
  data: Dataimg[]
}

export interface Dataimg {
  id: number
  attributes: AttributesIMG
}

export interface AttributesIMG{
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: ProviderMetadata3
  createdAt: string
  updatedAt: string
}

export interface Formats {
  small: Small
  thumbnail: Thumbnail
}

export interface Small {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
  provider_metadata: ProviderMetadata
}

export interface ProviderMetadata {
  public_id: string
  resource_type: string
}

export interface Thumbnail {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
  provider_metadata: ProviderMetadata2
}

export interface ProviderMetadata2 {
  public_id: string
  resource_type: string
}

export interface ProviderMetadata3 {
  public_id: string
  resource_type: string
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
