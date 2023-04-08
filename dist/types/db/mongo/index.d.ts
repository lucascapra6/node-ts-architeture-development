import Mongoose, { Connection } from "mongoose";
import { IMongoDbConnection } from "../../interfaces/DbConection/index.js";
export declare class MongoDB implements IMongoDbConnection {
    readonly _connection: Connection;
    constructor();
    connect(): Mongoose.Connection;
    isConnected(): Promise<string>;
}
