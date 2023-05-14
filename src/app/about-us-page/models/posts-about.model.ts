export class PostAboutModel {

    fechas: string[];
    titulos: string[];
    url: string[];
    descripciones: string[];
  
    constructor( titulos: string[], fechas: string[], descripciones: string[], url : string[]) {
        this.fechas = fechas;
        this.titulos = titulos;
        this.descripciones = descripciones;
        this.url = url;
    }
  }