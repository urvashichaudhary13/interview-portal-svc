"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const version = require('../../package.json').version;
const configurations_1 = require("../config/configurations");
class Swagger {
    getRouter() {
        const router = (0, express_1.Router)();
        router.route('/')
            .get((req, res) => {
            const { swaggerDefinition } = configurations_1.default;
            // options for the swagger docs
            const options = {
                // path to the API docs
                apis: ['dist/**/*.js'],
                // import swaggerDefinitions
                swaggerDefinition,
            };
            // initialize swagger-jsdoc
            const swaggerSpec = swaggerJSDoc(options);
            res.send(swaggerSpec);
        });
        return router;
    }
    getUI(swaggerUrl) {
        const options = {
            swaggerUrl: `${swaggerUrl}.json`,
        };
        return {
            serve: swaggerUi.serve,
            setup: swaggerUi.setup(undefined, options),
        };
    }
}
exports.default = Swagger;
