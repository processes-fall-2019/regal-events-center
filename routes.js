const LoginPolicy = require('./api/policies/LoginPolicy')
var userId

module.exports = (app, knex) => {
  app.post('/login', LoginPolicy.login, async (req, res) => {
   const {username, password} = req.body
   const user = await knex.select().from('admins')
     .where({ username: username, password: password })
     .then()
     .catch(e => {
       res.send({
         error: 'Error when fetching user from database.'
       })
     })

   if (user.length === 0) {
     return res.send({
       error: 'User not found.'
     })
   }

   userId = user[0].id

   res.send({
     message: `Hello ${req.body.username}, Welcome back.`,
     user: user
   })
  })


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


   app.get('/getAllEvents', async (req, res) => {
      await knex.select().from('events')
        // .where({ event_finished: false })
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


   app.get('/getAllVisitors', async (req, res) => {
      await knex.select().from('visitors')
        // .where({ event_finished: false })
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


   app.post('/createAnEvent', async (req, res) => {
    await knex('events')
      .insert({
        name: req.body.eventName,
        date_held: req.body.dateHeld,
        start_time: req.body.startTime,
        end_time: req.body.endTime,
        organizer: req.body.organizer,
        comments: req.body.message
      })
      .then(function () {
        res.send({
          message: `Event created`
        })
      })
      .catch(e => {
        res.send({
          error: 'Error creating event'
        })
      })
   })


   app.delete('/deleteEvent', async (req, res) => {
    await knex('events')
      .where({
        id: req.body.id
      })
      .del()
      .then(function () {
        res.send({
          message: `Event deleted`
        })
      })
      .catch(e => {
        res.send({
          error: 'Error deleting event'
        })
      })
   })


   app.post('/addVisitor', async (req, res) => {
    await knex('visitors')
      .insert({
        email: req.body.email
      })
      .then(function () {
        res.send({
          message: `Visitor created`
        })
      })
      .catch(e => {
        res.send({
          error: 'Error adding visitor to database.'
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
          <ul>
            <li> Desired date of reservation: ${req.body.form.date} </li>
            <li> Desired start time for event: ${req.body.form.start_time} </li>
            <li> Desired end time for event: ${req.body.form.end_time} </li>
            <li> Layout: ${req.body.form.layout} </li>
          </ul>
          <p>
            Please allow 24 hours for our team to get back to you regarding your reservation.
          </p>`
     }

     // send the email
     sendgrid.send(message)

     // add user to visitors table in db
     await knex('visitors')
       .insert({
         name: req.body.form.name,
         email: req.body.form.email
       })
       .then(function () {
         res.send({
           message: `Visitor created`
         })
       })
       .catch(e => {
         res.send({
           error: 'Error adding visitor to database.'
         })
       })
   })

   app.post('/sendConfirmationEmail', async (req, res) => {
     const sendgrid = require('@sendgrid/mail')

     sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

     const message = {
       to: req.body.email,
       from: 'admin@regaleventscenter.com',
       subject: 'Your Regal Events Center event attendance confirmation',
       text: 'here',
       html: `
          <p>
            Hello ${req.body.name}, thank you for your interest in Regal Events Center. You are confirmed to attend an event with the information below:
          </p>
          <ul>
            <li> Event name: ${req.body.eventName}</li>
            <li> Event date: ${req.body.eventDate}</li>
            <li> Number of people attending: ${req.body.numPeople}</li>
          </ul>`
     }

     // send the email
     sendgrid.send(message)

     // add user to visitors table in db
     await knex('visitors')
       .insert({
         name: req.body.name,
         email: req.body.email
       })
       .then(function () {
         res.send({
           message: `Visitor created`
         })
       })
       .catch(e => {
         res.send({
           error: 'Error adding visitor to database.'
         })
       })
   })
}
