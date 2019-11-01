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
// import AuthenticationService from '../services/AuthenticationService'

export default {
  name: 'UpcomingEvents',
  data () {
    return {
      showDate: new Date(),
      events: [
        {
          id: 'e1',
          startDate: '2019-11-30',
          endDate: '2019-11-31',
          title: 'R.E.C Opening Ceremony'
        },
        {
          startDate: '2019-11-06',
          endDate: '2019-11-07',
          title: 'Sample event 2'
        }
      ]
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
    // AuthenticationService
  },
  methods: {
    setShowDate(d) {
      this.showDate = d;
    },
  },
  async created () {

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
