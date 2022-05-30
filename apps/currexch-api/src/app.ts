import express, { Application } from 'express';
import cors from 'cors';
import { catchErrors } from './middlewares/catchErrors';
import exchangesRouter from './routes/exchanges.routes';
import { apiPathPrefix } from './constants/paths.constants';

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(apiPathPrefix, (req, res) => {
  res.send({ message: 'Welcome to CurrExchAPI!' });
});

app.use(`${apiPathPrefix}/exchanges`, exchangesRouter);

app.use(catchErrors);

export default app;
