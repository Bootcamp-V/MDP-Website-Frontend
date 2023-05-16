export interface ISectionRightArco {
  data: DataSectionRightArco[]
  meta: Meta
}

export interface DataSectionRightArco {
  id: number
  attributes: AttributesSectionRightArco
}

export interface AttributesSectionRightArco {
  title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  title_rights_arcos: TitleRightsArcos
}

export interface TitleRightsArcos {
  data: DataTitleRightsArcos[]
}

export interface DataTitleRightsArcos {
  id: number
  attributes: AttributesTitleRightsArcos
}

export interface AttributesTitleRightsArcos {
  title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  type: string
  description_rights_arcos: DescriptionRightsArcos
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
