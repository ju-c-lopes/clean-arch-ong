export class Item {
    private _itemId: number;
    private _type: string;
    private _amount: number;

    constructor(id: number, type: string, amount: number) {
        this._itemId = id;
        this._type = type;
        this._amount = amount;
    }

    get itemId(id: number) {
        return this._itemId;
    }

    get type(type: string) {
        return this._type;
    }

    get amount(amount: number) {
        return this._amount;
    }
}