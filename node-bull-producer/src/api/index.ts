import * as express from 'express';
import queues from '../queues';
const router = express.Router();

const getPing = async (_req, res) => {
  const body = { message: 'hello' };
  return res.send(body).status(200);
};

const postLog = async (_req, res) => {
  const body = { message: _req.body.message };
  await queues.log.add(body);
  return res.send(body).status(200);
};

const postEmail = async (_req, res) => {
  const body = { message: _req.body.message };
  await queues.email.add(body);
  return res.send(body).status(200);
};

 
router.get('/', getPing);
router.post('/log', postLog);
router.post('/email', postEmail);

export default router;
