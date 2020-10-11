'use strict';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import body_parser from 'body-parser';
import config from './config';  //
//import AppError from './lib/app_error';
import routes from './routes';
import {init as mysql_init} from './lib/mysql_connector';
import response from './lib/middlewares/res';
import {error404} from './lib/middlewares/error_handler';

global['config'] = config;
//global['AppError'] = AppError;
const app = express();

mysql_init(config.mysql);

app.disable('x-powered-by');
app.set('trust proxy', true);
app.use(cors({origin: true, credentials: true}));
app.use(morgan(':remote-addr :remote-user :user-agent :method :url HTTP/:http-version :status :res[content-length] - :response-time ms'));
app.use(response());
app.use(body_parser.json({limit: '50mb'}));
app.use(body_parser.urlencoded({extended: false, limit: '50mb'}));
app.use('/api/', routes);
app.use(error404());
app.listen(config.http.port, () => {
    console.log(`\nStart server at: ${new Date()}
                HTTP server is listening at: ${config.http.host}:${config.http.port}
                Mysql: ${config.mysql.host}, Database: ${config.mysql.database}
    `);
});
