
exports.up = function(knex) {
  return knex.schema.table('visitors', function(t) {
    t.bigInteger('event_id')
  })
}

exports.down = function(knex) {
  return knex.schema.table('visitors', function(t) {
    t.dropColumn('event_id')
  })
}
