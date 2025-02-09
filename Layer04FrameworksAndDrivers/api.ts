import { PackageController } from "@/Layer03InterfaceAdapters/Controllers/packageController";
import { Request, Response } from "express";
import { DbConnection } from "./dbInterface";

export class DonationApp {
    /*
        not implemented yet

        Receive package and sent to gateway
        get back adapted data from gateway and send it to use case
    */
    private _db: DbConnection;

    constructor(db: DbConnection) {
        this._db = db;
    }

    start() {
        const express = require('express');
        const app = express();
        app.use(express.json());
        const port = 3000;

        app.get("/package", async (req: Request, res: Response) => {
            // not implemented yet
        });
    }
}