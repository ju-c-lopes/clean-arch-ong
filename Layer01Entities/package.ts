import { Item } from "./item";

export class Package {
    private _packId: number;
    private _items: Item[] | null;

    constructor(id: number, items: Item[]) {
        this._packId = id;
        this._items = items;
    }

    get packId() {
        return this._packId;
    }

    get items() {
        return this._items;
    }
}