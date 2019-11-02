<template>
  <div class="app">
    <NavigationBar></NavigationBar>
    <h1> Upcoming Events </h1>
    <br>

    <div class="calendar">
      <calendar-view
        :show-date="showDate"
        :events="events"
        class="theme-default holiday-us-traditional holiday-us-official">
          <calendar-view-header
            slot="header"
            slot-scope="t"
            :header-props="t.headerProps"
            @input="setShowDate" />
      </calendar-view>
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

export default {
  name: 'UpcomingEvents',
  data () {
    return {
      showDate: new Date(),
      events: []
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
  },
  methods: {
    setShowDate(d) {
      this.showDate = d;
    },
  },
  async created () {
    try {
        const response = await AuthenticationService.getUpcomingEvents({
          // user_id: this.userId
        })

        // eslint-disable-next-line
        console.log('the resssssy', response)

        let events = response.data.map(event => {
          return {
            id: event.id,
            startDate: event.date_held,
            endDate: event.date_held,
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
  width: 1100px;
  height: 650px;
  position:relative;
  display:inline-block;
  top:50%;
}
</style>
