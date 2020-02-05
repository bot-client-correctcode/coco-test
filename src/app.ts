import express from 'express';
import { router } from './routes/web';

const app = express();

const PORT = 3000;
const HOST = 'localhost';

app.get('/hello-world', (req, res) => {
  res.send(`
    <h1>Hello World!</h1>
  `)
});

app.use(router);

app.listen(PORT, HOST, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`server is running on ${HOST}:${PORT}`);
})
