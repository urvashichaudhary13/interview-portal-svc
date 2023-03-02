import { Router } from 'express';
import swaggerJSDoc = require('swagger-jsdoc');
import * as swaggerUi from 'swagger-ui-express';
const version = require('../../package.json').version;
import configurations from '../config/configurations';

export default class Swagger {

  public getRouter() {
    const router = Router();
    

    router.route('/')
      .get((req, res) => {
        const { swaggerDefinition } = configurations
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

  public getUI(swaggerUrl: string) {
    const options = {
      swaggerUrl: `${swaggerUrl}.json`,
    };

    return {
      serve: swaggerUi.serve,
      setup: swaggerUi.setup(undefined, options),
    };
  }
}
