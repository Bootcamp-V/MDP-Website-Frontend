import { IHeader } from "../../models/header.interface"
import { ISubPage } from "./subpage.interface"

export interface IPage {
    data: DataPage[]
    meta: MetaPage
}

export interface DataPage {
    id: number
    attributes: AttributesPage
}

export interface AttributesPage {
    name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    header: IHeader
    sub_pages: ISubPage
}

export interface MetaPage {
    pagination: PaginationPage
}

export interface PaginationPage {
    page: number
    pageSize: number
    pageCount: number
    total: number
}

  