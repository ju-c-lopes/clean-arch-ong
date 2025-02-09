import { Item } from "@/Layer01Entities/item";
import { ItemInterfaceGateway } from "../Interfaces/interfaceGateway";
import { DbConnection } from "@/Layer04FrameworksAndDrivers/dbInterface";
import { DbParams } from "@/types/dbParams";

export class ItemGateway implements ItemInterfaceGateway {
    // not implemented yet
    private _dbRepository: DbConnection;
    private _tableName: string = "item";

    constructor(db: DbConnection) {
        this._dbRepository = db;
    }

    async Insert(item: [
        itemName: string, 
        amount: number, 
        amountType: string
    ]): Promise<void> {
        const newId: number = await this._dbRepository.GetLastId(this._tableName);
        const dbParams: DbParams[] = [];
        dbParams.push({ field: "id", value: newId });
        dbParams.push({ field: "itemName", value: item[0] });
        dbParams.push({ field: "amount", value: item[1] });
        dbParams.push({ field: "amountType", value: item[2]});
        await this._dbRepository.Insert(this._tableName, dbParams);
    }

    async Update(itemId: number): Promise<void> {
        const item = await this._dbRepository.FindByParams(this._tableName, [{ field: "id", value: itemId }]);
        const dbParams: DbParams[] = [];
        
        if (item.itemName) dbParams.push({ field: "itemName", value: item.itemName });
        if (item.amount) dbParams.push({ field: "amount", value: item.amount });
        if (item.amountType) dbParams.push({ field: "amountType", value: item.amountType});
        await this._dbRepository.Update(this._tableName, dbParams);
    }

    async Donate(itemId: number): Promise<void> {
        const item = await this._dbRepository.FindByParams(this._tableName, [{ field: "id", value: itemId }]);
        const dbParams: DbParams[] = [];
        
        if (item.amount) dbParams.push({ field: "amount", value: item.amount });
        await this._dbRepository.Donate(this._tableName, dbParams);
    }
}
