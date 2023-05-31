  export interface ICardsAboutUs {
    data: Datum[];
    meta: Meta;
  }
  
  interface Meta {
    pagination: Pagination;
  }
  
  interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  }
  
  interface Datum {
    id: number;
    attributes: Attributes;
  }
  
  interface Attributes {
    tittle_cards_about: string;
    description_cards_about: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    path: string;
  }
  
  
