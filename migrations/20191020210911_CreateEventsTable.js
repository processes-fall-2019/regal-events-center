
exports.up = function(knex) {
  return knex.schema.hasTable('events')
    .then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('events', function (t) {
          t.increments('id')
          t.string('name')
          t.string('organizer')
          t.string('comments')
          t.date('date_held')
          t.timestamps(true, true)
        })
      }
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('events')
};
