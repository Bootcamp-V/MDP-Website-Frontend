export interface IBannerInfo {
    data: DataBannerInfo[]
    meta: MetaBannerInfo
  }
  
  export interface DataBannerInfo{
    id: number
    attributes: AttributesBannerInfo
  }
  
  export interface AttributesBannerInfo {
    description: any
    createdAt: string
    updatedAt: string
    publishedAt: string
    title1: string
    title2: string
    img: Img
    sub_page: SubPage
    page: Page
  }
  
  export interface Img {
    data: Data
  }
  
  export interface Data {
    id: number
    attributes: AttributesImg
  }
  
  export interface AttributesImg {
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
    provider_metadata: ProviderMetadata
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
    provider_metadata: ProviderMetadataThumbnail
  }
  
  export interface ProviderMetadataThumbnail {
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
    provider_metadata: ProviderMetadataSmall
  }
  
  export interface ProviderMetadataSmall {
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
    provider_metadata: ProviderMetadataLarge
  }
  
  export interface ProviderMetadataLarge {
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
    provider_metadata: ProviderMetadataMedium
  }
  
  export interface ProviderMetadataMedium {
    public_id: string
    resource_type: string
  }
  
  export interface ProviderMetadata {
    public_id: string
    resource_type: string
  }
  
  export interface SubPage {
    data: DataSubPage
  }
  
  export interface DataSubPage {
    id: number
    attributes: AttributesSubPage
  }
  
  export interface AttributesSubPage {
    name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
  
  export interface Page {
    data?: DataPage
  }
  
  export interface DataPage {
    id: number
    attributes: AttributesPage
  }
  
  export interface AttributesPage {
    name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
  
  export interface MetaBannerInfo {
    pagination: PaginationBannerInfo
  }
  
  export interface PaginationBannerInfo {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
  