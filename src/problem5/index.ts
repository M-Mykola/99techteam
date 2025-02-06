import express, { Application } from 'express';
import mongooseConnection from './connections/db';
import router from './app/router';

const app: Application = express();
app.use(express.json());
app.use(router);
mongooseConnection();

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
