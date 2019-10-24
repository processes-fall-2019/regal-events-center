
exports.up = function(knex) {
  return knex.schema.hasTable('visitors')
    .then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('visitors', function (t) {
          t.increments('id')
          t.string('name')
          t.string('email')
          t.timestamps(true, true)
        })
      }
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('visitors')
};
