const Router = require("express");
const UserController = require("../controllets/user-controller");
const registerValidation = require("../validation");
const handleValidationErrors = require("../helpers/handleValidationErrors");
const checkAuth = require("../middleware/checkAuth");

const router = new Router();

router.post(
    "/registration",
    registerValidation,
    handleValidationErrors,
    UserController.registration
);
router.post(
    "/login",
    handleValidationErrors,
    UserController.login
);
router.get(
    "/check",
    checkAuth,
    UserController.auth
);

module.exports = router;