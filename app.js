import express from 'express';
const app = express();

app.get('/', (_, res) => {
  res.status(200).send('Hello World!');
});

export default app;  // Export pour les tests