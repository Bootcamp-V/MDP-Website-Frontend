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
  icon?: string
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
