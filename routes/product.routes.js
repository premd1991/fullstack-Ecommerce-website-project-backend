import { Router } from "express"
import { handleCreateNewProduct, handleGetAllProducts, 
handleGetMenProduct, handleGetWomenProduct, handleKidsProduct 
} from "../controllers/product.controller.js";
import { handleVerifyUserLogin } from "../middlewares/auth.middleware.js";


const router = Router(); 

router.use(handleVerifyUserLogin);

router.route("/").post(handleCreateNewProduct);

router.route("/").get(handleGetAllProducts);

router.route("/men").get(handleGetMenProduct);

router.route("/women").patch(handleGetWomenProduct);

router.route("/kids").delete(handleKidsProduct);

export default router;