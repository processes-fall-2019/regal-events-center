
exports.up = function(knex) {
  return knex.schema.table('events', function(t) {
    t.boolean('event_finished')
  })
}

exports.down = function(knex) {
  return knex.schema.table('events', function(t) {
    t.dropColumn('event_finished')
  })
}
