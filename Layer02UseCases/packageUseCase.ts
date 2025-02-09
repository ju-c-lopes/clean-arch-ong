import { PackageController } from "@/Layer03InterfaceAdapters/Controllers/packageController";
import { Item } from "@/Layer01Entities/item";

export class PackageUseCase {
    /*
        not implemented yet
    */

    private _id: number;
    private _items: Item[];

    constructor(id: number, items: Item[]) {
        this._id = id;
        this._items = items;
    }
}