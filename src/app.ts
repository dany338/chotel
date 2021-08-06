import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { ErrorHandler } from './helper/errors.handler';
import { route as routeRole } from './role/adapter/role.route';
import { route as routeUser } from './user/adapter/user.route';
import { route as routeAuth } from './auth/adapter/auth.route';
import { route as routeAgent } from './agent/adapter/agent.route';
import { route as routeLead } from './lead/adapter/lead.route';
import { route as routeJudicial } from './judicial/adapter/judicial.route';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Rutas
app.use('/roles', routeRole);
app.use('/users', routeUser);
app.use('/auth', routeAuth);
app.use('/agents', routeAgent);
app.use('/leads', routeLead);
app.use('/judicials', routeJudicial);

app.get('/health', (req: Request, res: Response) =>
  res.send('Todo está ok CRMAGENTS 2')
);

// Errors
app.use(ErrorHandler.pathNotFound);
app.use(ErrorHandler.generic);

app.use((err: any, req: Request, res: Response) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status);
  res.render('error');
});

export default app;
