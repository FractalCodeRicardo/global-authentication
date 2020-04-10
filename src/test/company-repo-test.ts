
import { expect } from 'chai';
import { createConnection } from "typeorm";
import { Company } from "../server/entities/company";
import CompanyRepo  from "../server/repositories/company-repo"
const configTest = require("../../ormconfig-testing.json");

function createCompany() : Company{
  let company = new Company();
  company.name = "Prueba";
  company.accessKey = "Prueba";
  company.domain = "Dominio";
  company.password = "Prueba";
  company.email = "Prueba";
  return company;
}

describe('Company repo', () => {
    it('Should not return null', async () => {

      let con = await createConnection(configTest);
      let repo = new CompanyRepo(con);
      let company = createCompany();
      let result = await repo.create(company);

      expect(result).to.not.equal(null);      
    });
});


describe('Company repo', () => {
  it('Company should exists in database', async () => {

    let con = await createConnection(configTest);
    let repo = new CompanyRepo(con);
    let company = createCompany();
    let result = await repo.create(company);

    con.getRepository(Company).find()

    expect(result).to.not.equal(null);      
  });
});