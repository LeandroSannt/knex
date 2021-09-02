
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username:'leandro santos'},
        {username:'leandro leandro'}
      ]);
    });
};

//criar seeds
//yarn knex seed:make nome_Da_seed  
