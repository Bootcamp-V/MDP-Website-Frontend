export interface ICardsAboutUs {
  data: Daum[]
  meta: Meta
}

export interface Daum {
  id: number
  attributes: Attributes
}

export interface Attributes {
  tittle_cards_about: string
  description_cards_about: string
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
