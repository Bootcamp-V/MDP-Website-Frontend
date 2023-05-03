export interface IAbout {
  data: IDataAbout[];
  meta: IMetaAbout;
}

export interface IDataAbout {
  id: number;
  attributes: IAttributesAbout;
}

export interface IAttributesAbout {
  title: string;
  firstDescription: string;
  secondDescription: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  frameVideo: any;
}

export interface IMetaAbout {
  pagination: IPaginationAbout;
}

export interface IPaginationAbout {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
