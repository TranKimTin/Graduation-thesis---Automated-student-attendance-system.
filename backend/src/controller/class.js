'use strict';
import * as Class from '../business/class';

export async function test(req, res, next) {
    try {
        let response = await Class.test();
        res.sendJson({
            data: response
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({code: error.code, message: error.message || undefined});
    }
}