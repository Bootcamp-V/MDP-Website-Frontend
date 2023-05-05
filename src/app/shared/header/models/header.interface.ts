export interface IHeader {
  data: IHeaderData[]
  meta: Meta
}

export interface IHeaderData {
  id: number
  attributes: HeaderAttributes
}

export interface HeaderAttributes {
  phoneNumber: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  logotypeUrl: string
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
