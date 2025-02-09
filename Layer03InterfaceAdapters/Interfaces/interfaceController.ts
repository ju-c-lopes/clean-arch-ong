export interface InsertPackage {
    RegisterPackage(items: [[itemType: string, amount: number]]): Promise<[[string, number]] | null>;
}