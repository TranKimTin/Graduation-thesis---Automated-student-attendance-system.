'use strict';
import express from 'express';
import * as Class from './controller/class';
const routes = express.Router({});

routes.get("/test", Class.test);
routes.get("/class", Class.getClass);

export default routes;