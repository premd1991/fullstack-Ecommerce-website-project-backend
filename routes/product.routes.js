import { Router } from "express"
import { handleCreateNewProduct, handleGetAllProducts, 
handleGetMenProduct, handleGetWomenProduct, handleGetKidsProduct, handleSliderProducts, 
} from "../controllers/product.controller.js";
import { handleVerifyUserLogin } from "../middlewares/auth.middleware.js";



const router = Router(); 

router.route("/slider").get(handleSliderProducts);

router.use(handleVerifyUserLogin);

router.route("/").post(handleCreateNewProduct);

router.route("/").get(handleGetAllProducts);

router.route("/men").get(handleGetMenProduct);

router.route("/women").get(handleGetWomenProduct);

router.route("/kids").get(handleGetKidsProduct);



export default router;