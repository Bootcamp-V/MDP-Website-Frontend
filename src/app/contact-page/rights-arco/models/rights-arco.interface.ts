export interface ISectionRightArco {
    data: DataSectionRightArco[]
    meta: Meta
  }
  
  export interface DataSectionRightArco{
    id: number
    attributes: AttributesSectionRightArco
  }
  
  export interface AttributesSectionRightArco {
    title: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    title_rights_arcos: TitleRightsArcos
    description_rights_arcos: DescriptionRightsArcos
  }
  
  export interface TitleRightsArcos {
    data: DataTitleRightsArco[]
  }
  
  export interface DataTitleRightsArco {
    id: number
    attributes: AttributesTitleRightsArco
  }
  
  export interface AttributesTitleRightsArco {
    title: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    type: string
  }
  
  export interface DescriptionRightsArcos {
    data: DataDescriptionRightsArcos[]
  }
  
  export interface DataDescriptionRightsArcos {
    id: number
    attributes: AttributesDescriptionRightsArcos
  }
  
  export interface AttributesDescriptionRightsArcos {
    description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    url?: string
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
  