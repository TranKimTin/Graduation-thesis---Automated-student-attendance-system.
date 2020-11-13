'use strict';
import ErrorCode from '../consts/error_codes';

export default function response() {
    return function (req, res, next) {
        res.sendJson = function ({ message, data, paging, options }) {
            let tmp = {
                status: 'success',
                message: message || 'success',
                data: data || {},
                paging: {
                    pageSize: 25,
                    pageIndex: 1,
                    totalPage: 1,
                }
            };
            if (paging) {
                tmp.paging = paging || {};
            }
            if (options) {
                tmp.options = options || {}
            }
            res.statusCode = 200;
            res.json(tmp);
        };

        /**
         *
         * @param code
         * @param message
         * @param httpStatusCode
         * @param data
         * @param messFormat
         */
        res.sendError = function ({ code, message, httpStatusCode, data, messFormat }) {
            if (!code) code = '400';
            message = message || ErrorCode[code];

            res.statusCode = httpStatusCode * 1 || 200;
            if (res.statusCode === 401) {
                res.setHeader("WWW-Authenticate", 'Bearer realm="Users", error="invalid_token"');
            }
            res.json({
                message: message,
                status: 'error',
                error_code: code,
                data: data
            });
        };

        next();
    }
}