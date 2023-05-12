export interface IStepsServices {
  data: DataStepsServices[]
  meta: Meta
}

export interface DataStepsServices {
  id: number
  attributes: Attributes
}

export interface Attributes {
  page: string
  title: string
  description: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  steps_child_services: StepsChildServices
}

export interface StepsChildServices {
  data: DataChildSteeps[]
}

export interface DataChildSteeps {
  id: number
  attributes: AttributesChildSteps
}

export interface AttributesChildSteps {
  title: string
  icon: string
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
