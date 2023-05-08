export interface IHeader {
  data: IHeaderData[]
  meta: HeaderMeta
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

export interface HeaderMeta {
  pagination: HeaderPagination
}

export interface HeaderPagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}