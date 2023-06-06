export interface IListDetailPage {
  data: DataListPage[]
  meta: Meta
}

export interface DataListPage {
  id: number
  attributes: Attributes
}

export interface Attributes {
  BlogName: string
  Description: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  blog_component_list_children: BlogComponentListChildren
  blog: Blog
}

export interface BlogComponentListChildren {
  data: DataBlogCLC[]
}

export interface DataBlogCLC {
  id: number
  attributes: AttributesDataBlogCLC
}

export interface AttributesDataBlogCLC {
  BlogName: string
  Item: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Blog {
  data: Data
}

export interface Data {
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
  preview: string
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
