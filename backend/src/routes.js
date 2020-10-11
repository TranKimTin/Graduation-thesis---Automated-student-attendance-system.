'use strict';
import express from 'express';
import * as Class from './controller/class';
const routes = express.Router({});

routes.get("/test", Class.test);

export default routes;