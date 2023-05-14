export interface IAgilePathConsulting {
  data: DataAgilPC[]
  meta: Meta
}

export interface DataAgilPC {
  id: number
  attributes: AttributesAPC
}

export interface AttributesAPC {
  page: string
  title: string
  description: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  urlImage: string
  agile_path_child_consultings: AgilePathChildConsultings
}

export interface AgilePathChildConsultings {
  data: DataAPCC[]
}

export interface DataAPCC {
  id: number
  attributes: AttributesAPCC
}

export interface AttributesAPCC {
  item: string
  createdAt: string
  updatedAt: string
  publishedAt: string
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
