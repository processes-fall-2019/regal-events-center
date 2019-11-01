
module.exports = (app, knex) => {
  app.get('/getPastEvents', async (req, res) => {
     const events = await knex.select().from('events')
       .where({ event_finished: true })
       .then(function (file) {
         res.send(file)
       })
       .catch(e => {
         res.send({
           message: req.body,
           error: 'Error when fetching from database.',
           errorBody: e
         })
       })
   })
}
