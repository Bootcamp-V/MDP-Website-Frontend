export interface ISubPage {
    data: DataSubPage[]
    meta: MetaSubPage
  }
  
  export interface DataSubPage {
    id: number
    attributes: AttributesSubPage
  }
  
  export interface AttributesSubPage {
    sub_pages: any
    name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
  
  export interface MetaSubPage {
    pagination: PaginationSubPage
  }
  
  export interface PaginationSubPage {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
  