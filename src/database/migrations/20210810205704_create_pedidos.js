
exports.up = function(knex) {
  return knex.schema.createTable('orders',(table) =>{
      table.increments('id')
      table.text('description')
      table.text('status')

      table.integer("project_id")
          .references('projects.id')
          .notNullable()
          .onDelete('CASCADE')

      table.timestamps(true,true)
  })

};

exports.down = function(knex) {
knex.schema.dropTable("projects")
};