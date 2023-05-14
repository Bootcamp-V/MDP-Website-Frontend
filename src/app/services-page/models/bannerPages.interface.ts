export interface IBannerPages {
  data: IDataBP[]
  meta: IMetaBP
}

export interface IDataBP {
  id: number
  attributes: IAttributesBP
}

export interface IAttributesBP {
  page: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  img: ImgBP
  title_banner_pages: ITitleBannerPages
  description_banner_pages: IDescriptionBannerPages
}

export interface ImgBP{
  data: IDataIMGBP[]
}

export interface IDataIMGBP{
  id: number
  attributes: IAttributesImgBP
}

export interface IAttributesImgBP{
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: IFormatsImgBP
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: IProviderMetadataIMGBP
  createdAt: string
  updatedAt: string
}

export interface IFormatsImgBP {
  small: ISmallImgBP
  large: ILargeImgBP
  thumbnail: IThumbnailImgBP
  medium: IMediumFIBP
}

export interface ISmallImgBP {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
  provider_metadata: IProviderMetadataSmall
}

export interface IProviderMetadataSmall {
  public_id: string
  resource_type: string
}

export interface ILargeImgBP {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
  provider_metadata: IProviderMetadataLarge
}

export interface IProviderMetadataLarge {
  public_id: string
  resource_type: string
}

export interface IThumbnailImgBP {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
  provider_metadata: IProviderMetadataThumbail
}

export interface IProviderMetadataThumbail {
  public_id: string
  resource_type: string
}

export interface IMediumFIBP {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
  provider_metadata: IProviderMetadataMedium
}

export interface IProviderMetadataMedium {
  public_id: string
  resource_type: string
}

export interface IProviderMetadataIMGBP {
  public_id: string
  resource_type: string
}

export interface ITitleBannerPages {
  data: IDataTitleBP[]
}

export interface IDataTitleBP {
  id: number
  attributes: IAttributesTitle
}

export interface IAttributesTitle {
  title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface IDescriptionBannerPages {
  data: IDataDescription[]
}

export interface IDataDescription {
  id: number
  attributes: IAttributesDescription
}

export interface IAttributesDescription {
  text: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface IMetaBP {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
