import { Connection } from "typeorm";

export default class BaseRepo{
    connection: Connection;

    constructor(connection: Connection){
        this.connection = connection;
    }
}