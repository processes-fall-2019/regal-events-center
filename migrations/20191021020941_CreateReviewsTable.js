
exports.up = function(knex) {
  return knex.schema.hasTable('reviews')
    .then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('reviews', function (t) {
          t.increments('id')
          t.bigInteger('event_id')
          t.string('reviewer')
          t.date('date_reviewed')
          t.timestamps(true, true)
        })
      }
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('reviews')
};
