const { Router } = require("express");

const usersRouter = require("./users.routes");
const productsRouter = require("./products.routes");
const tagsRouter = require("./tags.routes");
const sessionsRouter = require("./sessions.routes");
const favoritesRouter = require("./favorites.routes");

const routes = Router();
routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/products", productsRouter);
routes.use("/tags", tagsRouter);
routes.use("/favorites", favoritesRouter);

module.exports = routes;