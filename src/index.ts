import express from 'express';
import httpErrors from 'http-errors';
import { userRouter } from './routes/usersRouter';
import { moviesRouter } from './routes/moviesRouter';

const app = express();

app.use('/users', userRouter);
app.use('/movies', moviesRouter);

app.use((req, res, next) => {
  res.status(404);
  res.send('404 Not Found');
  next(httpErrors(404));
});

app.listen(3000, () => console.log('Express Server Start Port 3000'));
