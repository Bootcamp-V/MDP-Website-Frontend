export class ValuesVisionModel {

    titulos: string[];
    url: string[];
    descripciones: string[];
  
    constructor( titulos: string[], descripciones: string[], url : string[]) {
        this.titulos = titulos;
        this.descripciones = descripciones;
        this.url = url;
    }
  }