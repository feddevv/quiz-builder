import express from 'express';

const app = express();

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening to PORT ${process.env.PORT || 3000}`);
});
