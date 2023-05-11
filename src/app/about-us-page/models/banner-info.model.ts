export class BannerInfo {
    url: string;
    title1: string;
    title2: string;
    description: string;

    constructor(img: string, title1:string, title2:string, description: string) {
        this.url = img;
        this.title1 = title1;
        this.title2 = title2;
        this.description = description;
    }
}
