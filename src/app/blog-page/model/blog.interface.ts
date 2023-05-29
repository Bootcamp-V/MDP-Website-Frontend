export interface IBlog {
  data: DataBlog[]
  meta: Meta
}

export interface DataBlog{
  id: number
  attributes: AttributesBlog
}

export interface AttributesBlog {
  Title: string
  UrlImage: string
  SubTitle: string
  Category: string
  Date: string
  Likes: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  blog_component_descriptions: BlogComponentDescriptions
  blog_component_definitions: BlogComponentDefinitions
  blog_component_images: BlogComponentImages
  blog_component_lists: BlogComponentLists
}

export interface BlogComponentDescriptions {
  data: DataBlogCDescription[]
}

export interface DataBlogCDescription {
  id: number
  attributes: AttributesDataBlogCDescription
}

export interface AttributesDataBlogCDescription {
  SubTitle: string
  Description: string
  BlogName: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface BlogComponentDefinitions {
  data: DataBlogComponentDefinitions[]
}

export interface DataBlogComponentDefinitions {
  id: number
  attributes: AttributesDataBlogComponentDefinitions
}

export interface AttributesDataBlogComponentDefinitions {
  BlogName: string
  Title: string
  Definition: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface BlogComponentImages {
  data: DataBlogComponentImages[]
}

export interface DataBlogComponentImages {
  id: number
  attributes: AttributesDataBlogComponentImages
}

export interface AttributesDataBlogComponentImages {
  BlogName: string
  UrlImage: string
  SubTitle: string
  Description: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface BlogComponentLists {
  data: DataBlogComponentLists[]
}

export interface DataBlogComponentLists {
  id: number
  attributes: AttributesDataBlogComponentLists
}

export interface AttributesDataBlogComponentLists {
  BlogName: string
  Description: string
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
