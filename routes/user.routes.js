import { Router} from "express"
import { handleCreateNewUser, handleLoginUser, handleLogoutUser, 
    handleUpdateUser, handleDeleteUser } from "../controllers/user.controller.js"; 
import { handleVerifyUserLogin } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(handleCreateNewUser);

router.route("/login").post(handleLoginUser);

router.route("/logout").get(handleVerifyUserLogin,handleLogoutUser);

router.route("/edit").post(handleVerifyUserLogin,handleUpdateUser);

router.route("/delete").get(handleVerifyUserLogin,handleDeleteUser);

export default router;