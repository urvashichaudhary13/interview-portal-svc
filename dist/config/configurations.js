"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants = require("../libs/constants");
const version = require('../../package.json').version;
const configurations = Object.freeze({
    swaggerInfo: {
        description: 'Name Generator API with Swagger',
        title: 'Taxonomy Name Generator API',
    },
    swaggerDefinition: {
        basePath: '/api',
        info: Object.assign(Object.assign({}, constants.SWAGGER_INFO), { version }),
        securityDefinitions: {
            Bearer: Object.assign({}, constants.SWAGGER_SECURITY_DEFENITIONS),
        },
    },
});
exports.default = configurations;
