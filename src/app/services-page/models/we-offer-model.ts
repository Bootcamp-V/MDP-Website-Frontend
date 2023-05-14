export class WeOffer{
title:string;
listOffer:string[];

listInfoOffer:InfoOffer[];

constructor(title:string,listOffer:string[],listInfoOffer:InfoOffer[]){
this.title=title;
this.listOffer=listOffer;
this.listInfoOffer=listInfoOffer;


}


}
export class InfoOffer{
icon:string;
cantidad:string;
descripcion:string;

constructor(icon:string,cantidad:string,descripcion:string){
this.icon=icon;
this.cantidad=cantidad;
this.descripcion=descripcion;

  }

}
