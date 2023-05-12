export class AboutSubPageModel {

    
    titulos: string[];
    descripciones: string[];
    urls: string[];
  
    constructor(urls: string[], titulos: string[], descripciones: string[]) {
      this.urls = urls;
      this.titulos = titulos;
      this.descripciones = descripciones;
    }
  }