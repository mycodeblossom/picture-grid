import { Color } from './color';

export class Picture {
    title: string;
    url: string;
    thumbnailUrl: string;
    color: Color;

    get redValue() {
        return this.color.redValue;
    }

    get isLight() {
        return this.color.isLight;
    }

    constructor(title: string, url: string, thumbnailUrl: string) {
        this.title = title;
        this.url = url;
        this.thumbnailUrl = thumbnailUrl;
        this.color = new Color(this.getHexColorValueFromUrl(url))
    }

    private getHexColorValueFromUrl(url: string) {
        return url.substr(this.url.lastIndexOf('/') + 1);
    }
}
