import express, { Application } from 'express';
import cors from 'cors';
import { catchErrors } from './middlewares/catchErrors';

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to CurrExchAPI! new' });
});

app.use(catchErrors);

export default app;
