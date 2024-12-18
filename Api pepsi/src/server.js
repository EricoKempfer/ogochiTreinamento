import 'dotenv/config'
import Express from 'express'
import routes from './routes';
import cors from 'cors';
const fileUpload = require("express-fileupload");
const app = Express();

const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true)
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  credentials: true
};

app.use(cors(corsOptions));
app.use(Express.json());

routes(app);
app.use((req, res) => {
  return res.status(404).send('<h1>FFFF TOTAL</h1>')
})

app.listen(process.env.API_PORT, () => {
    console.log(`api rodando na http://localhost:${process.env.API_PORT}`);
})