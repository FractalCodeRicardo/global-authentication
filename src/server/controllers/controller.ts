import express from 'express';

export class Controller {

    app: express.Express;
    request: any;
    response: express.Response;


    constructor(app: any){
        this.app = app;

    }

    parameters(request: any, response: any) {
        this.request = request;
        this.response = response;

        return this;
    }

}