
exports.up = function (knex) {
  return knex.schema.alterTable('events', function (t) {
    t.boolean('event_finished').defaultTo(false).alter()
  })
}

exports.down = function (knex) {
  return knex.schema.alterTable('events', function (t) {
    t.dropColumn('event_finished')
  })
}
