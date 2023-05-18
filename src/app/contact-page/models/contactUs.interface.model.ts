

export interface IcontacUs {
    data: IdataContactUs[]
    meta: Meta
  }

  export interface IdataContactUs {
    id: number
    attributes: IattributesContactU
  }

  export interface IattributesContactU {
    title: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    policyFormUrl:string
    description_contact_uses: DescriptionContactUses
    contact_informations: ContactInformations
    social_networks: SocialNetworks
    claims_books: ClaimsBooks
    affair_contact_uses: AffairContactUses
  }
  export interface AffairContactUses {
    data: DataACU[]
  }

  export interface DataACU {
    id: number
    attributes: AttributesACU
  }

  export interface AttributesACU {
    text: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }

  export interface DescriptionContactUses {
    data: IDataDescriptionUs[]
  }

  export interface IDataDescriptionUs {
    id: number
    attributes: IattributesDescriptionUs
  }

  export interface IattributesDescriptionUs {
    text: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }

  export interface ContactInformations {
    data: IdataContactInfo[]
  }

  export interface IdataContactInfo {
    id: number
    attributes: IattributesContactInfo
  }

  export interface IattributesContactInfo{
    direccion: string
    telefono: string
    email: string
    web: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }

  export interface SocialNetworks {
    data: IDataSNContact[]
  }

  export interface IDataSNContact {
    id: number
    attributes: IattributesDataSNContact
  }

  export interface IattributesDataSNContact
   {
    name: string
    url: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    icon: string
  }

  export interface ClaimsBooks {
    data: IdataClaimsBooks[]
  }

  export interface IdataClaimsBooks {
    id: number
    attributes: IattributesClaimsBooks
  }

  export interface IattributesClaimsBooks {
    title: string
    description: string
    textButton: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    icon: string
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
