import { Connection } from "mongoose";
export interface IMongoDbConnection {
    connect(): Connection;
    isConnected(): Promise<string>;
}
