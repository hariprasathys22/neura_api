import express from 'express';
import connectDB from './config/db';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
connectDB();
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});