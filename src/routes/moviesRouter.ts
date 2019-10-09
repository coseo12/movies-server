import express from 'express';
import { MoviesVO } from '../models/MoviesVO';

const moviesRouter = express.Router();

moviesRouter.get('/', async (req, res) => {
  try {
    const data = await MoviesVO.findAll();
    res.send(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
});

export { moviesRouter };
