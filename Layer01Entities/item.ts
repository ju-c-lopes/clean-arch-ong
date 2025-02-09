export class Item {
    private _itemId: number;
    private _itemName: string;
    private _amountType: string;
    private _amount: number;

    constructor(
        id: number,
        itemName: string,
        amount: number,
        amountType: string
    ) {
        this._itemId = id;
        this._itemName = itemName;
        this._amount = amount;
        this._amountType = amountType;
    }

    get itemId() {
        return this._itemId;
    }

    get itemName() {
        return this._itemName;
    }

    get amount() {
        return this._amount;
    }

    get amountType() {
        return this._amountType;
    }
}