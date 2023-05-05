export interface ISocial {
    data: IDataSocials[]
    meta: Meta
  }
  
  export interface IDataSocials {
    id: number
    attributes: SocialsAttributes
  }
  
  export interface SocialsAttributes {
    name: string
    url: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    icon: string
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