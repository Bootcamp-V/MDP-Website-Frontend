export interface IAgilTransCons {
  data: DataIagilTr[]
  meta: Meta
}

export interface  DataIagilTr {
  id: number
  attributes: Attributes
}

export interface Attributes {
  page: string
  title: string
  subtitle: string
  urlImage: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  agile_child_descrip_transf_consultings: AgileChildDescripTransfConsultings
}

export interface AgileChildDescripTransfConsultings {
  data: DataAgilTransChild[]
}

export interface DataAgilTransChild {
  id: number
  attributes: AttributesDAT
}

export interface AttributesDAT {
  description: string
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
