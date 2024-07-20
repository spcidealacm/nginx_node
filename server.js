import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import "dotenv/config";

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get('/user', (req, res) => {
  console.log({ message: "Hello World!" });
  res.send({ message: "Hello World!" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})