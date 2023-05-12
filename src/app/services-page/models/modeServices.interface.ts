export interface IModelServicesC {
  data: IDataMSD[]
  meta: Meta
}

export interface IDataMSD {
  id: number
  attributes: IAttributesMS
}

export interface IAttributesMS {
  page: string
  title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  model_service_children: ModelServiceChildren
}

export interface ModelServiceChildren {
  data: DataChildrenM[]
}

export interface DataChildrenM {
  id: number
  attributes: IAttributesCM
}

export interface IAttributesCM {
  description: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  urlImage: string
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
