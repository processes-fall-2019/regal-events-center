<template>
  <div class="app">
    <NavigationBar></NavigationBar>
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
          <mdb-btn @click="register" color="success">Attend event</mdb-btn>
        </mdb-modal-footer>
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
      eventName: '',
      dateHeld: '',
      organizer: '',
      comments: '',
      startTime: '',
      endTime: ''
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
    register () {

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
