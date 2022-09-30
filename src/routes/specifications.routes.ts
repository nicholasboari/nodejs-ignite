import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification/index";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationsRoutes };
