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
