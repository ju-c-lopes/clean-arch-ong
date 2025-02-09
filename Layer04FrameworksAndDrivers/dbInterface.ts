import { DbParams } from "@/types/dbParams";

interface DbConnection {
    Insert(
        table: string,
        params: DbParams[],
        field?: string[] | null
    ): Promise<void>;

    FindAll(
        table: string,
        field?: string[] | null
    ): Promise<any[]>;

    FindByParams(
        table: string,
        params: DbParams[],
        field?: string[] | null
    ): Promise<any>

    Update(
        table: string,
        params: DbParams[],
        field?: string[] | null
    ): Promise<void>;

    Donate(
        table: string,
        params: DbParams[],
        field?: string[] | null
    ): Promise<void>;

    GetLastId(table: string): Promise<number>;
}

export { DbConnection };
