export interface ISocial {
  data: IDataSocials[]
  meta: MetaISocials
}

export interface IDataSocials {
  id: number
  attributes: AttributesISocials 
}

export interface AttributesISocials {
  name: string
  url: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  icon: string
}

export interface MetaISocials {
  pagination: PaginationISocials
}

export interface PaginationISocials {
  page: number
  pageSize: number
  pageCount: number
  total: number
}