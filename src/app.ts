import express from 'express';
import bodyParser from 'body-parser';

import SessionController from './server/controllers/session-controller'
import CompanyController from './server/controllers/company-controller'



const app = express();
const port = 8080;


const sessionController = new SessionController(app);
const companyController = new CompanyController(app);


app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log(`Server started listening to port ${port}`)
});



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.get("/company", (req, res) => { companyController.parameters(req, res).company() });
app.post("/login", (req, res) => { sessionController.parameters(req, res).login() })


