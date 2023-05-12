export interface IAboutSubPage {
    data: DataAboutSubPage[]
    meta: Meta
  }
  
  export interface DataAboutSubPage {
    id: number
    attributes: AttributesAboutSubPage
  }
  
  export interface AttributesAboutSubPage {
    name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    tittle_about_pages: TittleAboutPages
    description_about_pages: DescriptionAboutPages
    image_about_pages: ImageAboutPages
  }
  
  export interface TittleAboutPages {
    data: DataTittleAboutPages[]
  }
  
  export interface DataTittleAboutPages {
    id: number
    attributes: AttributesTittleAboutSubPage
  }
  
  export interface AttributesTittleAboutSubPage {
    tittle: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
  
  export interface DescriptionAboutPages {
    data: DataDescriptionAboutPages[]
  }
  
  export interface DataDescriptionAboutPages {
    id: number
    attributes: AttributesDescriptionAboutPages
  }
  
  export interface AttributesDescriptionAboutPages {
    description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
  
  export interface ImageAboutPages {
    data: DataImageAboutPages[]
  }
  
  export interface DataImageAboutPages {
    id: number
    attributes: AttributesImageAboutPages
  }
  
  export interface AttributesImageAboutPages {
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
  