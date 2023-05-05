export interface IServices {
  data: IDataServices[]
  meta: IMetaServices
}

export interface IDataServices {
  id: number
  attributes: IAttributesServices
}

export interface IAttributesServices {
  name: string
  imageUrl: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface IMetaServices {
  pagination: IPaginationServices
}

export interface IPaginationServices {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
