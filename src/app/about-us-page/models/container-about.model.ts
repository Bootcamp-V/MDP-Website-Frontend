export class ContainerAboutModel {

    
    titulos: string[];
    descripciones: string[];
    url: string[];
  
    constructor( titulos: string[], descripciones: string[], url : string[]) {
      this.titulos = titulos;
      this.descripciones = descripciones;
      this.url = url;
    }
  }