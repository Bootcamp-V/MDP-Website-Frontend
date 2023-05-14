export class BannerModel {
  url: string;
  titulos: string[];
  descripcion: string[];

  constructor(url: string, titulos: string[], descripcion: string[]) {
    this.url = url;
    this.titulos = titulos;
    this.descripcion = descripcion;
  }
}