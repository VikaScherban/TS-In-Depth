import { ReferenceItem } from './reference-item';
import { positiveInteger } from '../decorators';

export default class Encyclopedia extends ReferenceItem {
    private _copies: number;

    @positiveInteger
    get copies(): number {
        // eslint-disable-next-line no-underscore-dangle
        return this._copies;
    }

    set copies(value: number) {
        // eslint-disable-next-line no-underscore-dangle
        this._copies = value;
    }

    constructor(id: number, title: string, year: number, public edition: number) {
        super(id, title, year);
        console.log('Creating a new Encyclopedia');
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}
