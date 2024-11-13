import controller from "../controllers/IdiomaController";


export default (app) => {
  app.post('/idioma', controller.persist);
  app.patch('/idioma/:id', controller.persist);
  app.delete('/idioma/:id', controller.destroy);
  app.get('/idioma', controller.get);
  app.get('/idioma/:id', controller.get);
};