import * as constants from "../libs/constants";
const version = require('../../package.json').version;

const configurations = Object.freeze({
    swaggerInfo:{
        description: 'Name Generator API with Swagger',
        title: 'Taxonomy Name Generator API',
      },
    swaggerDefinition: {
        basePath: '/api',
        info: {
          ...constants.SWAGGER_INFO,
          version,
        },
        securityDefinitions: {
          Bearer: {
            ...constants.SWAGGER_SECURITY_DEFENITIONS,
          },
        },
    },
})

export default configurations;