export interface IBlogComment {
  data: DataBlogComment[]
  meta: Meta
}

export interface DataBlogComment {
  id: number
  attributes: AttributesBlogComment
}

export interface AttributesBlogComment {
  mensaje: string
  date: string
  email: string
  name: string
  favoritesCount: number
  published: boolean
  createdAt: string
  updatedAt: string
  publishedAt: string
  responses: Responses
  blog_comment: PreComments
  blog: Blog
}

export interface Responses {
  data: DataBlogComment[]
}

export interface DataResponses {
  id: number
  attributes: AttributesResponses
}

export interface AttributesResponses {
  mensaje: string
  date: string
  email: string
  name: string
  favoritesCount: number
  published: boolean
  createdAt: string
  updatedAt: string
  publishedAt: string;
  
}

export interface PreComments {
  data: DataPreComment[]
}

export interface DataPreComment {
  id: number
  attributes: AttributesPreComment
}

export interface AttributesPreComment {
  mensaje: string
  date: string
  email: string
  name: string
  favoritesCount: number
  published: boolean
  createdAt: string
  updatedAt: string
  publishedAt: string
}
export interface Blog {
  data: DataBlog
}

export interface DataBlog {
  id: number
  attributes: AttributesBlog
}

export interface AttributesBlog {
  Title: string
  UrlImage: string
  SubTitle: any
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