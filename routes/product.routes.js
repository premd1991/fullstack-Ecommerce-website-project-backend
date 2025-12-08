import { Router } from "express"
import { handleCreateNewProduct, handleGetAllProducts, 
handleGetSingleProduct, handleAddSingleProduct, handleDeleteSingleProduct 
} from "../controllers/product.controller.js";
import { handleVerifyUserLogin } from "../middlewares/auth.middleware.js";


const router = Router(); 

router.use(handleVerifyUserLogin);

router.route("/").post(handleCreateNewProduct);

router.route("/").get(handleGetAllProducts);

router.route("/:id").get(handleGetSingleProduct);

router.route("/:id").patch(handleAddSingleProduct);

router.route("/:id").delete(handleDeleteSingleProduct);

export default router;