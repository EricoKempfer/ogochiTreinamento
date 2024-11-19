import controller from "../controllers/FornecedorController";
import Authenticate from "../middleware/Authenticate";

export default (app) => {
  app.post('/fornecedor', controller.persist);
  app.patch('/fornecedor/:id', controller.persist);
  app.delete('/fornecedor/:id', controller.destroy);
  app.get('/fornecedor', Authenticate, controller.get);
  app.get('/fornecedor/:id', controller.get);
  app.post('/fornecedor/login', controller.login);
};