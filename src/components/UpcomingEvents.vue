<template>
  <div id="UpcomingEvents">
    <NavigationBar></NavigationBar>
    <h1> Upcoming Events </h1>
    <br>

    <div class="calendar">
      <calendar-view
        :show-date="showDate"
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

export default {
  name: 'UpcomingEvents',
  data () {
    return {
      showDate: new Date()
    }
  },
  props: {
    msg: String
  },
  components: {
    NavigationBar,
    CalendarView,
    CalendarViewHeader,
    Footer
  },
  methods: {
    setShowDate(d) {
      this.showDate = d;
    },
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
