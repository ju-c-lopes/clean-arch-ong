import { Item } from "@/Layer01Entities/item";

export interface PackageInterfaceGateway {
    Insert(items: [
        [itemName: string, amount: number, amountType: string]
    ]): Promise<void>;
}

export interface ItemInterfaceGateway {
    Insert(item: [
        itemType: string,
        amount: number,
        amountType: string
    ]): Promise<void>;
    Update(itemId: number): Promise<void>;
    Donate(itemId: number): Promise<void>;
}