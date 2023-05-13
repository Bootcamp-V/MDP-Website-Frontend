export interface IContainerAbout {
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
    icon: Icon
  }
  
  export interface Icon {
    data?: Daum2[]
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
    formats: any
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: any
    provider: string
    provider_metadata: ProviderMetadata
    createdAt: string
    updatedAt: string
  }
  
  export interface ProviderMetadata {
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
  