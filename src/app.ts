import 'reflect-metadata';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import express, { Request, Response, NextFunction } from 'express';
import ApplicationError from './errors/application-error';
import routes from './routes';
import cors from 'cors';
import logger from './logger';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';
const app = express();

app.use(morgan('combined', { stream: logger.stream }));
app.use(compression());
app.use(cookieParser());
// initalize passport
app.use(
  cors({
    origin: '*', // allow to server to accept request from different origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 200,
    credentials: true, // allow session cookie from browser to pass through
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 3000);
app.use(routes);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(function (req, res) {
  return res.status(404).send({
    status: 'Not Found',
    status_code: 404,
  });
});

app.use((err: ApplicationError, req: Request, res: Response, next: NextFunction) => {
  //logger.info(`request>>${JSON.stringify(req.body)}`)
  if (res.headersSent) {
    return next(err);
  }
  const statusCode: number = err.statusCode || 500;
  return res.status(statusCode).json({
    status: err.status,
    statusCode,
    message: err.message,
    error: process.env.NODE_ENV === 'development' ? err : undefined,
  });
});
export default app;
