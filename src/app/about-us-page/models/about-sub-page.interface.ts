export interface IAboutSubPage {
  data: DataIAboutSubPage []
  meta: Meta
}

export interface DataIAboutSubPage  {
  id: number
  attributes: AttributesAboutSubPage
}

export interface AttributesAboutSubPage {
  tittle: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  about_sub_page: AboutSubPage
  description_about_pages: DescriptionAboutPages
}

export interface AboutSubPage {
  data: DataAbout
}

export interface DataAbout {
  id: number
  attributes: AttributesAbout
}

export interface AttributesAbout {
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface DescriptionAboutPages {
  data: DataDescription[]
}

export interface DataDescription{
  id: number
  attributes: AttributesDescription
}

export interface AttributesDescription {
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
