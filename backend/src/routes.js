'use strict';
import express from 'express';
import * as Class from './controller/class';
const routes = express.Router({});

routes.get('/test', Class.test);
routes.get('/class', Class.getClass);

routes.post('/class', Class.insertClass);

routes.put('/class/:id', Class.updateClass);

routes.delete('/class/:classCode', Class.deleteClass);

export default routes;