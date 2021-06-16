import { Router } from 'express';
import { cityRouter } from './components/city';

const router = Router();

router.get('/', (req, res) => {
  return res.status(200).send({
    message: 'welcome to musement app',
  });
});

router.get('/welcome', (req, res) => {
  return res.status(200).send({
    message: 'welcome to musement app',
  });
});

router.use('/api/cities', cityRouter);

export default router;
