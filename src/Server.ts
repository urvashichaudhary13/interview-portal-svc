import * as express from "express";
import Swagger from "./libs/Swagger";
import router from "./router";


const port = 3006
const env = "local";


export default class Server {
  private app: express.Express;
  constructor() {
    this.app = express();
  }

  /**
 * This will Setup all the routes in the system
 *
 * @returns -Instance of Current Object
 * @memberof Server
 */
  public setupRoutes() {
    // mount /health-check
    this.app.use('/health-check', (req, res) => {
      res.send('I am OK');
    });

    // mount all routes on /api path
    this.app.use('/api', router);
  }

  /**
   * To enable all the setting on our express app
   * @returns -Instance of Current Object
   */
  public bootstrap() {
    this.initSwagger();
    this.setupRoutes();
    return this.app;
  }

  public run() {
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
  private initSwagger() {
    const swaggerSetup = new Swagger();
    const swaggerUrl = "/api-docs";
    // JSON route
    this.app.use(
      `${swaggerUrl}.json`,
      swaggerSetup.getRouter(),
    );

    // UI route
    const { serve, setup } = swaggerSetup.getUI(swaggerUrl);

    this.app.use(swaggerUrl, serve, setup);
  }

}
