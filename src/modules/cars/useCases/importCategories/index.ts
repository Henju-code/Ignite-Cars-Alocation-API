import { CategoriesRepository } from "../../repositories/implementations/CategoryRepository";
import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

const categoriesRepository = null;
const importCategoriesUseCase = new ImportCategoriesUseCase(
    categoriesRepository
);
const importCategoryController = new ImportCategoriesController(
    importCategoriesUseCase
);

export { importCategoryController };
