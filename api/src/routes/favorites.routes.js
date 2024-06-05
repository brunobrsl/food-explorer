const { Router } = require("express");

const FavoritesController = require("../controllers/FavoritesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const favoritesRoutes = Router();

const favoritesController = new FavoritesController();

favoritesRoutes.use(ensureAuthenticated);

favoritesRoutes.get("/", favoritesController.index);
favoritesRoutes.delete("/:product_id", favoritesController.delete);
favoritesRoutes.post("/", favoritesController.toggle);

module.exports = favoritesRoutes;