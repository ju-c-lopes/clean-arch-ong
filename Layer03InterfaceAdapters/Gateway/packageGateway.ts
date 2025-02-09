import { DbConnection } from "@/Layer04FrameworksAndDrivers/dbInterface";
import { PackageInterfaceGateway } from "../Interfaces/interfaceGateway";
import { DbParams } from "@/types/dbParams";
import { Item } from "@/Layer01Entities/item";
import { ItemGateway } from "./itemGateway";

export class PackageGateway implements PackageInterfaceGateway {
    private _dbRepository: DbConnection;
    private _tableName: string = "package";

    constructor(db: DbConnection) {
        this._dbRepository = db;
    }

    async Insert(items: [
        [itemName:string, amount: number, amountType: string]
    ]): Promise<void> {
        const newId = await this._dbRepository.GetLastId(this._tableName)

        const preparedItems: [] = [];

        for (let i = 0; i < items.length; i++) {
            let itemGateway = new ItemGateway(this._dbRepository);
            // fazer controller para item
            itemGateway.Insert(items[i]);
            preparedItems.push();
        }
    }
}