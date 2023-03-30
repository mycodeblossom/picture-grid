export class Color {

    private hexColor;
    private hsp: number;

    private redValueRGB: number;
    private greenValueRGB: number;
    private blueValueRGB: number;

    get redValue() {
        return this.getColorCode('redValueRGB');
    }

    get greenValue() {
        return this.getColorCode('greenValueRGB');
    }

    get blueValue() {
        return this.getColorCode('blueValueRGB');
    }

    get isLight(): boolean {
        return this.getHSP() > 127.5;
    }

    constructor(hexColorValue: string) {
        const length = hexColorValue.length;
        let hexColorValueToSet = hexColorValue;
        // manage non-standard hex values 
        if (length === 3) {
            const r = hexColorValue.slice(0, 1);
            const g = hexColorValue.slice(1, 2);
            const b = hexColorValue.slice(2, 3);
            hexColorValueToSet = `${r}${r}${g}${g}${b}${b}`;
        }
        if (length === 4) {
            hexColorValueToSet = `${hexColorValue}00`;
        }
        if (length === 5) {
            hexColorValueToSet = `${hexColorValue.slice(0, 4)}0${hexColorValue.slice(4)}`;
        }
        this.hexColor = hexColorValueToSet;
    }

    private getColorCode(prop: string): number {
        if (!this[prop]) {
            let index;
            switch (prop) {
                case 'redValueRGB':
                    index = 0;
                    break;
                case 'greenValueRGB':
                    index = 2;
                    break;
                case 'blueValueRGB':
                    index = 4;
                    break;
            }
            const hexValue = this.hexColor.substr(index, 2);
            const rgbValue = parseInt(hexValue, 16);
            this[prop] = rgbValue;
        }
        return this[prop];
    }

    private getHSP(): number {
        if (!this.hsp) {
            this.hsp = Math.sqrt(
                0.299 * (this.redValue * this.redValue) +
                0.587 * (this.greenValue * this.greenValue) +
                0.114 * (this.blueValue * this.blueValue)
            );
        }
        return this.hsp;
    }
}
