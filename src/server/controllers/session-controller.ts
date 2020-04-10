import CompanyRepo from '../repositories/company-repo'
import session from 'express-session'
import express from  'express'
import path from 'path'
import { Controller } from './controller';

export default class SessionController extends Controller {

    constructor(app: any){
        super(app);
    }

    login() {

        let email = this.request.body.email;
        let password = this.request.body.password;
        let repo = new CompanyRepo();
        if (!repo.checkPassword(email, password)) {
            this.destroySession();

            this.response.send({success: false, message: "Incorrect password or email."})
            return ;
        }

        this.createSession(email, password);
        this.response.redirect("/company");

        return ;
    }


    private destroySession() {
        if (this.request.session) {
            this.request.session.destroy();
        }
    }

    private createSession(email: string, password: string) {
        if(this.request.session){
            return;
        }

        this.app.use(session({
            secret: email
        }));
    }
}

