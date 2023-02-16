import * as express from "express";
import questionRoute from "./routes/question";
// import {Routes} from "./routes/Routes";
import bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT;

// app.use(cors());
app.use(express.json());
// app.use(morgan('dev'));
// app.set('trust proxy', 1);
// app.use(trim);

app.use("/questions", questionRoute);
// class App {public app: express.Application;
//     // public routePrv: Routes;constructor() {// initializing express in this application
//         this.app = express();// support application/json type post data
//         this.app.use(bodyParser.json());//support application/x-www-form-urlencoded post data
//         this.app.use(bodyParser.urlencoded({ extended: false }));// for routing the http request to controller
//         this.routePrv = new Routes();
//         this.routePrv.routes(this.app);}}export default new App().app;

export default app;
