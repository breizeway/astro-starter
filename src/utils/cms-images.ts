export default class CmsImages {
  _images: { [src: string]: Function };

  constructor() {
    this._images = import.meta.glob("../assets/images/*");
  }

  getSrc(cmsSrc: string) {
    console.log(
      `:::THIS.IMAGES::: `,
      this._images[cmsSrc.replace("src/", "../")],
    );
    return this._images[cmsSrc.replace("src/", "../")];
  }
}
