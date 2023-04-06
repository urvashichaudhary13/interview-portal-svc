"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Swagger_1 = __importDefault(require("./libs/Swagger"));
const router_1 = __importDefault(require("./router"));
const cors_1 = __importDefault(require("cors"));
const errorHandler_1 = require("./libs/errorHandler");
require("./Database");
const port = 3006;
const env = "local";
class Server {
    constructor() {
        this.app = (0, express_1.default)();
    }
    /**
   * This will Setup all the routes in the system
   *
   * @returns -Instance of Current Object
   * @memberof Server
   */
    setupRoutes() {
        // mount all routes on /api path
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.use('/api', router_1.default);
        this.app.use(errorHandler_1.errorHandler);
    }
    /**
     * To enable all the setting on our express app
     * @returns -Instance of Current Object
     */
    bootstrap() {
        this.initSwagger();
        this.setupRoutes();
        return this.app;
    }
    run() {
        this.bootstrap();
        const server = this.app.listen(port, () => {
            const message = `|| App is running at port '${port}' in '${env}' mode ||`;
            console.info(message.replace(/[^]/g, '-'));
            console.info(message);
            console.info(message.replace(/[^]/g, '-'));
            console.info('Press CTRL-C to stop\n');
        });
        return this;
    }
    /**
     * Initialize Swagger
     */
    initSwagger() {
        const swaggerSetup = new Swagger_1.default();
        const swaggerUrl = "/api-docs";
        // JSON route
        this.app.use(`${swaggerUrl}.json`, swaggerSetup.getRouter());
        // UI route
        const { serve, setup } = swaggerSetup.getUI(swaggerUrl);
        this.app.use(swaggerUrl, serve, setup);
    }
}
exports.default = Server;
