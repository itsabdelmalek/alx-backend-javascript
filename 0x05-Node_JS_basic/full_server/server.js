// full_server/server.js
import express from 'express';
import routes from './routes';

const app = express();
const port = 1245;
const dbPath = process.argv[2];

app.use('/', routes);
app.set('dbPath', dbPath);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
