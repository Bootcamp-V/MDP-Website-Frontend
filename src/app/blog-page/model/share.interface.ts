export interface IDetailShare {
  data: DataShare[]
  meta: Meta
}

export interface DataShare {
  id: number
  attributes: Attributes
}

export interface Attributes {
  Page: string
  SocialNetworkName: string
  icon: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  Url: string
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
