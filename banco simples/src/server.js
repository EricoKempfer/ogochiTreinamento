import 'dotenv/config'
import Express from 'express'
import routes from './routes';


const app = Express();

app.use(Express.json());

routes(app);
app.use((req, res) => {
  return res.status(404).send('<h1>FFFF TOTAL</h1>')
})

app.listen(process.env.API_PORT, () => {
    console.log(`api rodando na http://localhost:${process.env.API_PORT}`);
})