export interface IFooter {
  data: IDataFooter[]
  meta: IMetaFooter
}

export interface IDataFooter {
  id: number
  attributes: IAttributesFooter
}

export interface IAttributesFooter {
  logoUrl: string
  direccion: string
  telefono: string
  email: string
  fechaCopyright: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  social_networks: ISocialNetworksFooter
  contact_informations: ContactInformations
}

export interface ContactInformations {
  data: DataFooterCI[]
}

export interface DataFooterCI{
  id: number
  attributes: AttributesDFCI
}

export interface AttributesDFCI {
  direccion: string
  telefono: string
  email: string
  web: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface ISocialNetworksFooter {
  data: IDataSNFooter[]
}

export interface IDataSNFooter {
  id: number
  attributes: IAttributesSNFooter
}

export interface IAttributesSNFooter {
  name: string
  url: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  icon: string
}

export interface IMetaFooter {
  pagination: IPaginationFooter
}

export interface IPaginationFooter {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
