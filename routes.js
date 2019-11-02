
module.exports = (app, knex) => {
  app.get('/getPastEvents', async (req, res) => {
     await knex.select().from('events')
       .where({ event_finished: true })
       .then(function (event) {
         res.send(event)
       })
       .catch(e => {
         res.send({
           message: req.body,
           error: 'Error when fetching from database.',
           errorBody: e
         })
       })
   })

   app.get('/getUpcomingEvents', async (req, res) => {
      await knex.select().from('events')
        .where({ event_finished: false })
        .then(function (event) {
          res.send(event)
        })
        .catch(e => {
          res.send({
            message: req.body,
            error: 'Error when fetching from database.',
            errorBody: e
          })
        })
   })

   app.post('/sendEmail', async (req, res) => {
     const sendgrid = require('@sendgrid/mail')

     sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

     const message = {
       to: req.body.email,
       from: 'admin@regaleventscenter.com',
       subject: 'Your Regal Events Center venue reservation',
       text: 'here',
       html: `
          <p>
            Hello ${req.body.form.name}, thank you for your interest in Regal Events Center. You have requested to book a venue with the information below:
          </p>
          <p>
            Please allow 24 hours for our team to get back to you regarding your reservation.
          </p>
          <ul>
            <li> Desired date of reservation: ${req.body.form.date} </li>
            <li> Layout: ${req.body.form.layout} </li>
          </ul>`
     }

     // send the email
     sendgrid.send(message)
   })

   // app.post('/createEvent', async (req, res) => {
   //
   // })
}
