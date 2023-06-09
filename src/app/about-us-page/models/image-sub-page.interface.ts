export interface IImageSubpage {
  data: DataImageSubpage[]
  meta: Meta
}

export interface DataImageSubpage {
  id: number
  attributes: AttributesImageSubpage
}

export interface AttributesImageSubpage {
  createdAt: string
  updatedAt: string
  publishedAt: string
  imagen: Imagen
  about_sub_page: AboutSubPage
}

export interface Imagen {
  data: DataImagen
}

export interface DataImagen {
  id: number
  attributes: AttributesImagen
}

export interface AttributesImagen {
  name: string
  alternativeText: string
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
  large: Large
  medium: Medium
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
  provider_metadata: ProviderMetadata3
}

export interface ProviderMetadata3 {
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

export interface AboutSubPage {
  data: DataAboutSubPage
}

export interface DataAboutSubPage {
  id: number
  attributes: AttributesAboutSubPage
}

export interface AttributesAboutSubPage {
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
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
