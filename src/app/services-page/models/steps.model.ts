export class stepsModel {
  icons: string[];
  titleFather: string;
  textFather: string;
  titleChild: string[];
  textChild: string[];

  constructor(
    icons: string[],
    titleFather: string,
    textFather: string,
    titleChild: string[],
    textChild: string[]
  ) {
    this.icons = icons;
    this.titleFather = titleFather;
    this.titleChild = titleChild;
    this.textFather = textFather;
    this.textChild = textChild;
  }
}
