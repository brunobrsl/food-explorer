const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const ProductsController = require("../controllers/ProductsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

const productsRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const productsController = new ProductsController();

productsRoutes.use(ensureAuthenticated);

productsRoutes.get("/", productsController.index);
productsRoutes.post("/", verifyUserAuthorization("admin"), upload.single("image"),  productsController.create);
productsRoutes.get("/:id", productsController.show);
productsRoutes.delete("/:id", verifyUserAuthorization("admin"), productsController.delete);
productsRoutes.patch("/edit/:id", verifyUserAuthorization("admin"), upload.single("image"), productsController.update);

module.exports = productsRoutes;