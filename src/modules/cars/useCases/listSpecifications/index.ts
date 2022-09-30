import { ListSpecificationsController } from "./ListSpecificationController";
import { ListCategoriesUseCase } from "./../listCategories/ListCategoriesUseCase";
import { SpecificationsRepository } from "./../../repositories/implementations/SpecificationsRepository";

const specificationsRepository = SpecificationsRepository.getInstance();
const listSpecificationsUseCase = new ListCategoriesUseCase(
  specificationsRepository
);
const listSpecificationController = new ListSpecificationsController(
  listSpecificationsUseCase
);

export { listSpecificationController };
