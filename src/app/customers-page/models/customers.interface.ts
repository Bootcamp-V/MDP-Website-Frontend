export interface ICustomers {
  data: IDataCustomers[];
  meta: IMetaCustomers;
}

export interface IDataCustomers {
  id: number;
  attributes: IAttributesCustomers;
}

export interface IAttributesCustomers {
  type: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  img: IImgCustomers;
}

export interface IImgCustomers {
  data: IImgDataCustomers;
}

export interface IImgDataCustomers {
  id: number;
  attributes: IAttributes2;
}

export interface IAttributes2 {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: IFormatsCustomers;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: IProviderMetadata3;
  createdAt: string;
  updatedAt: string;
}

export interface IFormatsCustomers {
  small: ISmall;
  thumbnail: IThumbnail;
}

export interface ISmall {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  url: string;
  provider_metadata: IProviderMetadata;
}

export interface IProviderMetadata {
  public_id: string;
  resource_type: string;
}

export interface IThumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  url: string;
  provider_metadata: IProviderMetadata2;
}

export interface IProviderMetadata2 {
  public_id: string;
  resource_type: string;
}

export interface IProviderMetadata3 {
  public_id: string;
  resource_type: string;
}

export interface IMetaCustomers {
  pagination: IPaginationCustomers;
}

export interface IPaginationCustomers {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
