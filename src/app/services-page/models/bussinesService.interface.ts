export interface IBussinessService {
  data: DataBussinesService[]
  meta: Meta
}

export interface DataBussinesService {
  id: number
  attributes: Attributes
}

export interface Attributes {
  page: string
  title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  bussines_child_services: BussinesChildServices
}

export interface BussinesChildServices {
  data: DataBCS[]
}

export interface DataBCS {
  id: number
  attributes: AttributesCBS
}

export interface AttributesCBS {
  title: string
  icon: string
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
