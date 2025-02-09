import { PackageGateway } from "@/Layer03InterfaceAdapters/Gateway/packageGateway";
import { DbConnection } from "@/Layer04FrameworksAndDrivers/dbInterface";

export class PackageController {
    /*
        not implemented yet

        Receive package and sent to gateway
        get back adapted data from gateway and send it to use case
    */
    // private _items: [[string, number]];

    // constructor(items: [[itemType: string, amount: number]]) {
    //     this._items = items;
    // }

    static async RegisterPackage(
        items: [[itemType: string, amount: number, amountType: string]],
        db: DbConnection
    ): Promise<void> {
        // const packageData = new Package(
        //     // id=
        // );
        const packageGateway = new PackageGateway(db);
    }
}