import controller from "../controllers/FornecedorController";


export default (app) => {
  app.post('/fornecedor', controller.persist);
  app.patch('/fornecedor/:id', controller.persist);
  app.delete('/fornecedor/:id', controller.destroy);
  app.get('/fornecedor', controller.get);
  app.get('/fornecedor/:id', controller.get);
};