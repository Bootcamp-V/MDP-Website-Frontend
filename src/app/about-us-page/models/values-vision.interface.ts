export interface IValuesVision {
  data: Daum[]
  meta: Meta
}

export interface Daum {
  id: number
  attributes: Attributes
}

export interface Attributes {
  tittle: string
  description: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  image: Image
}

export interface Image {
  data: Daum2[]
}

export interface Daum2 {
  id: number
  attributes: Attributes2
}

export interface Attributes2 {
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
  provider_metadata: ProviderMetadata5
  createdAt: string
  updatedAt: string
}

export interface Formats {
  thumbnail: Thumbnail
  small: Small
  medium?: Medium
  large?: Large
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
  provider_metadata: ProviderMetadata
}

export interface ProviderMetadata {
  public_id: string
  resource_type: string
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
  provider_metadata: ProviderMetadata2
}

export interface ProviderMetadata2 {
  public_id: string
  resource_type: string
}

export interface Medium {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
  provider_metadata: ProviderMetadata3
}

export interface ProviderMetadata3 {
  public_id: string
  resource_type: string
}

export interface Large {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
  provider_metadata: ProviderMetadata4
}

export interface ProviderMetadata4 {
  public_id: string
  resource_type: string
}

export interface ProviderMetadata5 {
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
