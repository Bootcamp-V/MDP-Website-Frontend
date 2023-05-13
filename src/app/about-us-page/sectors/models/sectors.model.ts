export interface ISectors {
  data: IDataSectors[];
  meta: IMetaSectors;
}

export interface IDataSectors {
  id: number;
  attributes: IAttributesSectors;
}

export interface IAttributesSectors {
  title: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  type: string;
  img: IImgSectors;
}

export interface IImgSectors {
  data: IImgDataSectors;
}

export interface IImgDataSectors {
  id: number;
  attributes: IAttributes2;
}

export interface IAttributes2 {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: IFormatsSectors;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: IProviderMetadata5;
  createdAt: string;
  updatedAt: string;
}

export interface IFormatsSectors {
  thumbnail: IThumbnail;
  small: ISmall;
  medium: IMedium;
  large: ILarge;
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
  provider_metadata: IProviderMetadata;
}

export interface IProviderMetadata {
  public_id: string;
  resource_type: string;
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
  provider_metadata: IProviderMetadata2;
}

export interface IProviderMetadata2 {
  public_id: string;
  resource_type: string;
}

export interface IMedium {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  url: string;
  provider_metadata: IProviderMetadata3;
}

export interface IProviderMetadata3 {
  public_id: string;
  resource_type: string;
}

export interface ILarge {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  url: string;
  provider_metadata: IProviderMetadata4;
}

export interface IProviderMetadata4 {
  public_id: string;
  resource_type: string;
}

export interface IProviderMetadata5 {
  public_id: string;
  resource_type: string;
}

export interface IMetaSectors {
  pagination: IPaginationSectors;
}

export interface IPaginationSectors {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
