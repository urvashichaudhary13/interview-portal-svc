"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SWAGGER_SECURITY_DEFENITIONS = exports.SWAGGER_INFO = void 0;
exports.SWAGGER_INFO = {
    description: 'APIs used in Interview Feedback Portal ',
    title: 'Interview Feedback Portal',
};
exports.SWAGGER_SECURITY_DEFENITIONS = {
    in: 'header',
    type: 'apiKey',
    name: 'Authorization',
    scheme: 'Bearer',
};
