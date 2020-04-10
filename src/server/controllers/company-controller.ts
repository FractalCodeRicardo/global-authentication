import { Controller } from "./controller";


export default class CompanyController extends Controller{

    constructor(app: any){
        super(app);

    }

    company(){
        this.response.sendFile(__dirname + "/public/company.html");
    }

}