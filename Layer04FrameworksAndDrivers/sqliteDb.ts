import { DbConnection } from './dbInterface';
import { DbParams } from '../types/dbParams';
import { open } from 'sqlite';

const sqlite3 = require('sqlite3').verbose();

export class SqliteDb implements DbConnection {
    private _db: string;

    constructor(db: string) {
        this._db = db;
    };

    private async connect() {
        return await open({
            filename: this._db,
            driver: sqlite3.Database
        });
    };

    async Insert(table: string, params: DbParams[]): Promise<void> {
        const nameFields: string[] = [];
        const nameValues: string[] = [];
        const values: Record<string, any> = {};

        params.forEach((param) => {
            nameFields.push(param.field);
            const nameValue = `$${param.field}`;
            nameValues.push(nameValue);
            values[nameValue] = param.value;
        });

        const sql = `
            INSERT INTO ${table} 
            (${nameFields.join(', ')}) 
            VALUES 
            (${nameValues.join(', ')})
        `;

        const db = await this.connect();
        const prepared = await db.prepare(sql, values);
        prepared.run();
    };

    async FindAll(table: string, field?: string[] | null): Promise<any[]> {
        const db = await this.connect();
        const sql = `SELECT ${field ? field.join(', ') : '*'} FROM ${table}`;
        const rows = await db.all(sql);
        db.close();
        return rows;
    };

    async FindByParams(table: string, params: DbParams[], field?: string[] | null): Promise<any> {
        const nameFields: string[] = [];
        const values: Record<string, any> = {};

        params.forEach((param) => {
            nameFields.push(param.field);
            const nameValue = `$${param.field}`;
            values[nameValue] = param.value;
        });

        const sql = `
            SELECT ${field ? field.join(', ') : '*'} 
            FROM ${table} 
            WHERE ${nameFields.join(' AND ')};
        `;

        const db = await this.connect();
        const prepared = await db.prepare(sql, values);
        const rows = await prepared.all();
        db.close();
        return rows;
    };

    async Update(table: string, params: DbParams[], field?: string[] | null): Promise<void> {
        const nameFields: string[] = [];
        const nameValues: string[] = [];
        const values: Record<string, any> = {};

        params.forEach((param) => {
            nameFields.push(param.field);
            const nameValue = `$${param.field}`;
            nameValues.push(`${param.field} = ${nameValue}`);
            values[nameValue] = param.value;
        });

        const sql = `
            UPDATE ${table} 
            SET ${nameValues.join(', ')} 
            WHERE ${nameFields.join(' AND ')};
        `;

        const db = await this.connect();
        const prepared = await db.prepare(sql, values);
        prepared.run();
    };

    async Donate(table: string, params: DbParams[], field?: string[] | null): Promise<void> {
        const nameFields: string[] = [];
        const nameValues: string[] = [];
        const values: Record<string, any> = {};

        params.forEach((param) => {
            nameFields.push(param.field);
            const nameValue = `$${param.field}`;
            nameValues.push(`${param.field} = ${param.field} - ${nameValue}`);
            values[nameValue] = param.value;
        });

        const sql = `
            UPDATE ${table} 
            SET ${nameValues.join(', ')} 
            WHERE ${nameFields.join(' AND ')};
        `;

        const db = await this.connect();
        const prepared = await db.prepare(sql, values);
        prepared.run();
    };

    async GetLastId(table: string): Promise<number> {
        const db = await this.connect();
        const sql = `SELECT MAX(id) as id FROM ${table}`;
        const lastRecord = await db.get(sql);
        db.close();
        if (lastRecord.id === null || lastRecord.id === undefined) {
            return 1;
        }
        return lastRecord.id + 1;
    }
}