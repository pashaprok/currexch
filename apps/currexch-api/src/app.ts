import express, { Application } from 'express';
import cors from 'cors';
import { catchErrors } from './middlewares/catchErrors';
import exchangesRouter from './routes/exchanges.routes';

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pathPrefix = '/api';

app.get(pathPrefix, (req, res) => {
  res.send({ message: 'Welcome to CurrExchAPI! new' });
});

app.use(`${pathPrefix}/exchanges`, exchangesRouter);

app.use(catchErrors);

export default app;
