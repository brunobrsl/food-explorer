const knex = require("../database/knex");

class FavoritesController {
  async toggle(request, response) {
    const user_id = request.user.id;
    const { product_id } = request.body;

    const favorite = await knex("favorites")
    .where({ user_id, product_id })
    .first();

    if (favorite) {
      await knex("favorites")
      .where({ user_id, product_id })
      .delete();

      return response.status(201).json({ removed: true });
    } else {
      await knex("favorites").insert({ user_id, product_id });
      
      return response.status(201).json({ added: true });
    }
  }

  async delete(request, response) {
    const user_id = request.user.id;
    const { product_id } = request.params;

    await knex("favorites").where({ user_id, product_id }).delete();

    return response.json();
  }

  async index(request, response) {
    const user_id = request.user.id;

    const favorites = await knex("favorites")
    .where({ user_id })
    .join("products", "favorites.product_id", "products.id")
    .select([
      "products.id",
      "products.name",
      "products.image"
    ])
    .orderBy("products.name");

    return response.json(favorites);
  }
}

module.exports = FavoritesController;