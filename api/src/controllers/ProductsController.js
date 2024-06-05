const knex = require("../database/knex");
const DiskStorage = require("../providers/DiskStorage");

class ProductsController {
  async create(request, response) {
    const { name, category, tags, price, description } = request.body;
    const imageFilename = request.file.filename;

    const diskStorage = new DiskStorage();

    const filename = await diskStorage.saveFile(imageFilename);

    const formattedPrice = parseFloat(price.replace(',', '.')).toFixed(2);

    const [product_id] = await knex("products").insert({
      name,
      category,
      price: formattedPrice,
      description,
      image: filename,
    });

    const tagsInsert = tags.map(name => {
      return {
        product_id,
        name
      }
    });

    await knex("tags").insert(tagsInsert);

    return response.json();
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, category, tags, price, description } = request.body;
    const imageFilename = request.file ? request.file.filename : null;

    const diskStorage = new DiskStorage();

    const formattedPrice = parseFloat(price.replace(',', '.')).toFixed(2);

    const product = await knex("products")
     .where({ id }).first();

    if(imageFilename) {
      await diskStorage.deleteFile(product.image);
  
      const filename = await diskStorage.saveFile(imageFilename);
  
      await knex("products").where({ id }).update({
        name,
        category,
        price: formattedPrice,
        description,
        image: filename
      });
    } else {
      await knex("products").where({ id }).update({
        name,
        category,
        price: formattedPrice,
        description
      });
    }

    await knex("tags").where({ product_id: id }).delete();

    const tagsInsert = tags.map(name => {
      return {
        product_id: id,
        name
      }
    });

    await knex("tags").insert(tagsInsert);

    return response.json();
  }

  async show(request, response) {
    const { id } = request.params;

    const product = await knex("products").where({ id }).first();
    const tags = await knex("tags").where({ product_id: id }).orderBy("name");

    return response.json({
      ...product,
      tags
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    const diskStorage = new DiskStorage();

    const product = await knex("products")
      .where({ id }).first();

    await diskStorage.deleteFile(product.image);

    await knex("products").where({ id }).delete();

    return response.json();
  }
  
  async index(request, response) {
    const { name } = request.query;

    let products;

    if (name) {
      products = await knex("products")
       .whereLike("name", `%${name}%`)
       .orderByRaw("LOWER(name)");
    } else {
      products = await knex("products")
      .select([
        "id",
        "name",
        "category",
        "price",
        "description",
        "image"
      ])
       .orderByRaw("LOWER(name)");
    }
    

    return response.json(products);
  }
}

module.exports = ProductsController;