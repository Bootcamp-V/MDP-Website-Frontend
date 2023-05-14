export interface IPlanConsulting {
  data: IDataPlanC[]
  meta: Meta
}

export interface IDataPlanC {
  id: number
  attributes: AttributesPC
}

export interface AttributesPC {
  title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  plan_child_consultings: PlanChildConsultings
}

export interface PlanChildConsultings {
  data: DataPCC[]
}

export interface DataPCC {
  id: number
  attributes: AttributesCPC
}

export interface AttributesCPC {
  paso: number
  title: string
  tiempo: string
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
