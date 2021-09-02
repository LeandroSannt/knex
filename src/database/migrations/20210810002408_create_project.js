
exports.up = function(knex) {
    return knex.schema.createTable('projects',(table) =>{
        table.increments('id')
        table.text('title')
        table.integer('value')

        table.integer("user_id")
            .references('users.id')
            .notNullable()
            .onDelete('CASCADE')

        table.timestamps(true,true)
    })
  
};

exports.down = function(knex) {
  knex.schema.dropTable("projects")
};
