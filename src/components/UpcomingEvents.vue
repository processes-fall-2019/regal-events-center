<template>
  <div class="app">
    <NavigationBar></NavigationBar>
    <div>
      <b-alert v-model="showDismissibleAlert" variant="success" dismissible>
        You have successfully signed up to attend an event! Please check your email for a confirmation email.
      </b-alert>
    </div>
    <h1> Upcoming Events </h1>
    <br>

    <div class="calendar">
      <calendar-view
        @click-event="onClickEvent"
        :show-date="showDate"
        selectable=true
        :events="events"
        class="theme-default holiday-us-traditional holiday-us-official">

          <calendar-view-header
            slot="header"
            slot-scope="t"
            :header-props="t.headerProps"
            @input="setShowDate" />
      </calendar-view>
    </div>

    <div>
      <mdb-modal :show="modal" @close="modal = false">
        <mdb-modal-header>
          <mdb-modal-title>Event Info</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <h4 class="my-4">Event name: {{ this.eventName }}</h4>
          <h4 class="my-4">Date held: {{ this.dateHeld }}</h4>
          <h4 class="my-4">Start time: {{ this.startTime }}</h4>
          <h4 class="my-4">End time: {{ this.endTime }}</h4>
        </mdb-modal-body>
        <mdb-modal-footer>
          <mdb-btn color="danger" @click.native="modal = false">Close</mdb-btn>
          <mdb-btn @click="attendEvent" color="success">Attend event</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>
    </div>

    <div>
      <mdb-modal :show="modal2" @close="modal2 = false">
        <mdb-modal-header>
          <mdb-modal-title>Input your information to attend this event</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <!-- <input class="my-4"></input> -->
          <h5> Attending Event:  {{ this.eventName }} </h5>

          <!-- <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-input
              class="my-4"
              v-model="fullName"
              required
              placeholder="Enter your full name"
            ></b-form-input>
            <b-form-input
              class="my-4"
              v-model="email"
              type="email"
              required
              placeholder="Enter your email"
            ></b-form-input>
            <b-form-input
              class="my-4"
              v-model="number"
              type="number"
              placeholder="Enter your phone number (optional)"
            ></b-form-input>
          </b-form> -->

          <b-form v-if="show" @submit="onSubmit" class="form-horizontal">
            <div>
              <div>
                <b-form-input
                  class="my-4"
                  v-model="fullName"
                  required
                  placeholder="Enter your full name"
                ></b-form-input>

                <b-form-input
                  class="my-4"
                  v-model="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                ></b-form-input>

                <b-form-input
                  class="my-4"
                  v-model="number"
                  type="number"
                  placeholder="Enter your phone number (optional)"
                ></b-form-input>
              </div>
            </div>
            <div>
              <div>
                <b-button class="cancelButton" @click="onReset" size="lg" variant="danger">Cancel</b-button>
                <b-button class="submitButton" type="submit" size="lg" variant="success">Attend</b-button>&nbsp;
              </div>
            </div>
          </b-form>

        </mdb-modal-body>
        <!-- <mdb-modal-footer>
          <mdb-btn color="danger" @click.native="modal2 = false">Close</mdb-btn>
          <b-button class="submitButton" type="submit" @click="register" color="success">Attend</b-button>
        </mdb-modal-footer> -->
      </mdb-modal>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <Footer> </Footer>
  </div>
</template>

<script>
import NavigationBar from './NavigationBar'
import Footer from './Footer'
import { CalendarView, CalendarViewHeader } from 'vue-simple-calendar'
import AuthenticationService from '../services/AuthenticationService'
import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn } from 'mdbvue'
require("vue-simple-calendar/static/css/holidays-us.css")
require("vue-simple-calendar/static/css/default.css")

export default {
  name: 'UpcomingEvents',
  data () {
    return {
      showDate: new Date(),
      events: [],
      modal: false,
      modal2: false,
      eventName: '',
      dateHeld: '',
      organizer: '',
      comments: '',
      startTime: '',
      endTime: '',
      email: '',
      fullName: '',
      number: '',
      show: true,
      showDismissibleAlert: false,
    }
  },
  props: {
    msg: String
  },
  components: {
    NavigationBar,
    CalendarView,
    CalendarViewHeader,
    Footer,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbBtn,
  },
  methods: {
    setShowDate (d) {
      this.showDate = d;
    },
    onClickEvent (event) {
      // eslint-disable-next-line
      // console.log('clicked: ', event.title);
      this.modal = true
      this.eventName = event.title

      let str = event.startDate.toString()
      var n = str.search(":")

      this.dateHeld = str.substring(0, n-2)
      // this.organizer =
      // eslint-disable-next-line
      // console.log(event);
      this.startTime = event.originalEvent.startTime
      this.endTime = event.originalEvent.endTime
    },
    attendEvent () {
      this.modal2 = true
      this.modal = false
    },
    async onSubmit (evt) {
      evt.preventDefault()
      this.showDismissibleAlert = true
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })

      this.modal2 = false

      // await AuthenticationService.addVisitor({
      //   email: this.email,
      //   message: this.message
      // })

    },
    onReset () {
      this.email = ''
      this.fullName = ''
      this.number = ''
      this.showDismissibleAlert = false
      this.modal2 = false
    }
  },
  async created () {
    try {
        const response = await AuthenticationService.getUpcomingEvents({
        })

        // eslint-disable-next-line
        console.log('the resssssy', response)

        let events = response.data.map(event => {
          return {
            id: event.id,
            startDate: event.date_held,
            endDate: event.date_held,
            startTime: event.start_time,
            endTime: event.end_time,
            title: event.name
          }
        })

        this.events = events

        return response
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calendar {
  width: 80%;
  height: 650px;
  /* position:relative; */
  display:inline-block;
  /* top:50%; */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	/* color: #2c3e50; */
	margin-left: auto;
	margin-right: auto;
  background-color: white;
}
</style>
