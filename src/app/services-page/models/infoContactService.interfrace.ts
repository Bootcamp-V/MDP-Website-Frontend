export interface IInfoContactService {
  data: DataInfoService[]
  meta: Meta
}

export interface DataInfoService{
  id: number
  attributes: Attributes
}

export interface Attributes {
  title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  page: string
  list_info_contact_services: ListInfoContactServices
}

export interface ListInfoContactServices {
  data: DataListInfoService[]
}

export interface DataListInfoService {
  id: number
  attributes: AttributesInfoService
}

export interface AttributesInfoService {
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
