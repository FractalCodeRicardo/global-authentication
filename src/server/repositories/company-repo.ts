import { createConnection, Repository } from "typeorm";
import { Company } from "../entities/company";
import BaseRepo from "./base-repo";

export default class CompanyRepo extends BaseRepo {

    constructor(connection?:any){
        super(connection);
    }



    checkPassword(email: string, password: string): boolean {
        return true;
    }


    async verifyPassword(email: string, password: string): Promise<boolean> {      
        let rep = this.connection.getRepository(Company);

        let company = await rep
            .createQueryBuilder("company")
            .where("company.email = :email AND company.password = :password",{
                email: email,
                password: password
            })
            .getOne() 

        return company != null;

    }


    async create(company: Company): Promise<Company>{
        let rep = this.connection.getRepository(Company);
        return rep.save(company);
    }

}


