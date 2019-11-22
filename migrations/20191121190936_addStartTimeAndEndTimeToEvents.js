
exports.up = function(knex) {
  return knex.schema.table('events', function(t) {
    t.time('start_time', { precision: 6 })
    t.time('end_time', { precision: 6 })
  })
}

exports.down = function(knex) {
  return knex.schema.table('events', function(t) {
    t.dropColumn('start_time')
    t.dropColumn('end_time')
  })
}
