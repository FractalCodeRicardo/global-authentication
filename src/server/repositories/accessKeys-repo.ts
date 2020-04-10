import BaseRepo from "./base-repo";
import { Connection } from "typeorm";
import { AccessKey } from "../entities/access-key";
import bcrypt from 'bcrypt'

export default class AccessKeyRepo extends BaseRepo {

    constructor(connection: Connection){
        super(connection)
    }

    create(): Promise<AccessKey>{
        let repo = this.connection.getRepository(AccessKey);
        let access = new AccessKey();
        let promise = repo.save(access)
        return promise;
    }

    /*private count(): Promise<number>{
    
    }*/

    private async randomHash(): Promise<string> {
        let repo = this.connection.getRepository(AccessKey);
        let count = await repo.count();
        let date =  new Date();
        let id = date.toISOString() + count; 
        
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(id, salt);

        return hash;
    }

}