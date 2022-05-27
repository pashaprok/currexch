import { Router } from 'express';
import { availableRates } from '../controllers/exchanges.controller';

const router: Router = Router();

router.route('/');

router.route('/available-currencies').get(availableRates);

export default router;
