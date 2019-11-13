
exports.up = function(knex) {
  return knex.schema.hasTable('admins')
    .then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('admins', function (t) {
          t.increments('id')
          t.string('username')
          t.string('password')
          t.timestamps(true, true)
        })
      }
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('admins')
};
