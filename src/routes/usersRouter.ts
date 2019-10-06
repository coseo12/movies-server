import express from 'express';
import { UserVO } from '../models/UserVO';

const userRouter = express.Router();

userRouter.get('/', async (req, res, next) => {
  try {
    const data = await UserVO.findAll();
    res.send(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
});

export { userRouter };
