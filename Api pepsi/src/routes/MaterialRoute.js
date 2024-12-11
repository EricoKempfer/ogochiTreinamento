import controller from "../controllers/MaterialController";
import Authenticate from "../middleware/Authenticate";

export default (app) => {
  app.post('/material', controller.persist);
  app.patch('/material/:id', controller.persist);
  app.delete('/material/:id', controller.destroy);
  app.get('/material', controller.get);
  app.get('/material/:id', controller.get);
};