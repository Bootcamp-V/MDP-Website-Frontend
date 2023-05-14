export interface IContentHome {
    data: DataContentHome[]
    meta: Meta
  }
  
  export interface DataContentHome {
    id: number
    attributes: AttributesContentHome
  }
  
  export interface AttributesContentHome {
    title?: string
    first_description?: string
    second_description?: string
    url?: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    locate: string
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
  