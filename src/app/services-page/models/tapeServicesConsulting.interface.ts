export interface ITapeServicesConsulting {
  data: DataTapeServConsulting[]
  meta: Meta
}

export interface DataTapeServConsulting {
  id: number
  attributes: Attributes
}

export interface Attributes {
  title: string
  description: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  textButton: string
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
