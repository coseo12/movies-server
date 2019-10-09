import express, { Router } from 'express';
import url from 'url';
import { UserVO } from '../models/UserVO';
import { where } from 'sequelize/types';

const userRouter: Router = express.Router();

interface Data {
  id: number;
  email: string;
  pass: string;
  nickname: string;
  created_at: Date;
}

userRouter.get('/', async (req, res) => {
  try {
    const data: Array<Data> = await UserVO.findAll();
    res.send(JSON.stringify(data));
  } catch (error) {
    res.status(400).send('404 Not Found!');
  }
});

userRouter.get('/:id', async (req, res) => {
  try {
    const id: number = Number(url.parse(req.url).path.split('/')[1]);
    const data: object = await UserVO.findOne({
      where: {
        id,
      },
    });
    res.status(200).send(JSON.stringify(data));
  } catch (error) {
    res.status(400).send('404 Not Found');
  }
});

userRouter.post('/', async (req, res) => {
  try {
    const data: Data = req.query;
    if (
      !data.hasOwnProperty('email') ||
      !data.hasOwnProperty('pass') ||
      !data.hasOwnProperty('nickname')
    )
      throw new Error();
    await UserVO.create({ ...data });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send('400 Bad Request');
  }
});

userRouter.put('/', async (req, res) => {
  try {
    const data: Data = req.query;
    if (
      !data.hasOwnProperty('id') ||
      !data.hasOwnProperty('email') ||
      !data.hasOwnProperty('pass') ||
      !data.hasOwnProperty('nickname')
    )
      throw new Error();

    await UserVO.update(
      {
        email: data.email,
        pass: data.pass,
        nickname: data.nickname,
      },
      {
        where: { id: data.id },
      },
    );

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send('400 Bad Request');
  }
});

userRouter.delete('/', async (req, res) => {
  try {
    const data: Data = req.query;
    if (!data.hasOwnProperty('id')) throw new Error();
    await UserVO.destroy({
      where: { id: data.id },
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send('400 Bad Request');
  }
});

export { userRouter };
