exports.up = knex => knex.schema.createTable("tags", table => {
  table.increments("id");
  table.text("name").notNullable();
  table.integer("product_id").references("id").inTable("products").onDelete("CASCADE");
});

exports.down = knex => knex.schema.dropTable("tags");