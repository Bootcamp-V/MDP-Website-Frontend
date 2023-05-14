export interface IWeOffer {
  data: DataOffer[]
  meta: Meta
}

export interface DataOffer {
  id: number
  attributes: Attributes
}

export interface Attributes {
  createdAt: string
  updatedAt: string
  publishedAt: string
  page: string
  title: string
  list_offer_services: ListOfferServices
  report_offer_services: ReportOfferServices
}

export interface ListOfferServices {
  data: DataList[]
}

export interface DataList {
  id: number
  attributes: AttributesList
}

export interface AttributesList{
  item: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface ReportOfferServices {
  data: DataReport[]
}

export interface DataReport {
  id: number
  attributes: AttributesReport
}

export interface AttributesReport{
  icon: string
  number: string
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
