import Mongoose, {Connection, connection} from "mongoose";
import {IMongoDbConnection} from "../../interfaces/DbConection/index.js";
const CONECTION_STATUS = {
    0:'Desconectado',
    1: 'Conectado',
    2:'Conectando',
    3:'Desconectado'
}


export class MongoDB implements IMongoDbConnection {
    readonly _connection: Connection;

    constructor() {
        this._connection = Mongoose.connection
    }
    connect() {
        Mongoose.connect('mongodb://lucas:mysecretpassword@localhost:27017/herois') //colocar no .env

        const connection = Mongoose.connection
        connection.once('open',() => console.log('database running'))
        return connection
    }
    async isConnected(): Promise<string> {
        await new Promise(resolve => setTimeout(resolve, 1000))
        const connectionState = CONECTION_STATUS[this._connection.readyState as keyof typeof CONECTION_STATUS]
        return connectionState
    }
}
