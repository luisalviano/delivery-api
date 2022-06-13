import { Router } from "express";
import { ensureClientAuthenticated } from "./middlewares/ensureClientAuthenticated";
import { ensureDeliverymanAuthenticated } from "./middlewares/ensureDeliverymanAuthenticated";
import { AuthenticateClientController } from "./modules/account/useCases/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { AddDeliverymanController } from "./modules/deliveries/useCases/addDeliveryman/AddDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAvailableDeliveriesController } from "./modules/deliveries/useCases/findAvailableDeliveries/FindAvailableDeliveriesController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAvailableDeliveriesController = new FindAvailableDeliveriesController();
const addDeliverymanController = new AddDeliverymanController();

routes.post("/client", createClientController.handle);
routes.post("/client/sessions", authenticateClientController.handle);

routes.post("/deliveryman", createDeliverymanController.handle);
routes.post("/deliveryman/sessions", authenticateDeliverymanController.handle);

routes.post("/delivery", ensureClientAuthenticated, createDeliveryController.handle);
routes.get("/delivery/available", ensureDeliverymanAuthenticated, findAvailableDeliveriesController.handle);
routes.patch("/delivery/:id/add-deliveryman", ensureDeliverymanAuthenticated, addDeliverymanController.handle);

export { routes }