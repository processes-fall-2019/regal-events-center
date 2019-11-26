<template>
  <div>
    <NavigationBar></NavigationBar>
    <b-button href="#/" pill variant="danger" class="right">Logout</b-button>

    <h1 class="left"> Welcome back, </h1>
    <br />
    <div class="table">
      <h3> All Events</h3>
      <!-- <vue-bootstrap4-table :rows="rows" :columns="columns" :config="config" @on-select-row="openVisitorModal"> -->
      <vue-bootstrap4-table :rows="rows" :columns="columns" :config="config">
       <template slot="sort-asc-icon">
         <i class="fa fa-sort-up"></i>
       </template>
       <template slot="sort-desc-icon">
           <i class="fa fa-sort-down"></i>
       </template>
       <template slot="no-sort-icon">
           <i class="fa fa-sort"></i>
       </template>
       <!-- <template slot="open_modal" slot-scope="props"> -->
       <template slot="open_modal" slot-scope="props">
         <!-- <button class="btn btn-primary" @click="openVisitorModal(props.row)">View Details</button> -->
         <button @click="openModal(props.row)" class="btn btn-primary">View Details</button>
       </template>
       <template slot="delete_event" slot-scope="props">
         <!-- <button class="btn btn-primary" @click="openVisitorModal(props.row)">View Details</button> -->
         <button @click="deleteEvent(props.row)" class="btn btn-danger">Delete</button>
       </template>
      </vue-bootstrap4-table>
    </div>

    <modal
    :name="modalName"
    height="auto"
    width="1000px"
    :scrollable="true"
    @before-open="beforeOpen">

    <h4 class="my-4">&nbsp; Event name: {{ this.eventName }}</h4>
    <h4 class="my-4">&nbsp; Date held: {{ this.dateHeld }}</h4>
    <h4 class="my-4">&nbsp; Organizer: {{ this.organizer }}</h4>
    <h4 class="my-4">&nbsp; Start time: {{ this.startTime }}</h4>
    <h4 class="my-4">&nbsp; End time: {{ this.endTime }}</h4>
    <!-- <h4 class="my-4">Event finished? {{ this.event_finished }}</h4> -->

    </modal>

    <CreateEventModal></CreateEventModal>


    <br />
    <br />
    <hr />
    <div class="table">
      <br />
      <h3> All Visitors</h3>
      <!-- <vue-bootstrap4-table :rows="rows" :columns="columns" :config="config" @on-select-row="openVisitorModal"> -->
      <vue-bootstrap4-table :rows="visitorsRows" :columns="visitorsCols" :config="config">
       <template slot="sort-asc-icon">
         <i class="fa fa-sort-up"></i>
       </template>
       <template slot="sort-desc-icon">
           <i class="fa fa-sort-down"></i>
       </template>
       <template slot="no-sort-icon">
           <i class="fa fa-sort"></i>
       </template>
       <!-- <template slot="open_modal" slot-scope="props"> -->
       <template slot="open_modal" slot-scope="props">
         <!-- <button class="btn btn-primary" @click="openVisitorModal(props.row)">View Details</button> -->
         <button @click="openVisitorModal(props.row)" class="btn btn-primary">View Details</button>
       </template>
      </vue-bootstrap4-table>
    </div>

    <modal
    :name="visitorModal"
    height="auto"
    width="1000px"
    :scrollable="true"
    @before-open="visitorBeforeOpen">

    <h4 class="my-4">&nbsp; Visitor name: {{ this.visitorName }}</h4>
    <h4 class="my-4">&nbsp; Visitor email: {{ this.visitorEmail }}</h4>
    <h4 class="my-4">&nbsp; Event attended: {{ this.eventAttended }}</h4>
    <!-- <h4 class="my-4">Blacklisted? {{ this.event_finished }}</h4> -->

    </modal>

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
import VueBootstrap4Table from 'vue-bootstrap4-table'
import AuthenticationService from '../services/AuthenticationService'
import CreateEventModal from '../modals/CreateEventModal'

export default {
  name: 'AdminPage',
  data () {
    return {
      componentKey: 0,
      visitorName: '',
      visitorEmail: '',
      eventAttended: '',
      eventName: '',
      dateHeld: '',
      organizer: '',
      startTime: '',
      endTime: '',
      modalName: 'events-modal',
      visitorModal: 'visitors-modal',
      rows: [],
      visitorsRows: [],
      columns: [{
        label: "Event Name",
        name: "name",
        filter: {
          type: "simple",
          placeholder: "Search Event Name"
        },
        sort: true,
      },
      {
        label: "Date Held",
        name: "date_held",
        sort: true,
        filter: {
          type: "simple",
          placeholder: "Search Date Held"
        },
      },
      {
        label: "Organizer",
        name: "organizer",
        filter: {
          type: "simple",
          placeholder: "Search Location"
        },
        sort: true,
      },
      {
        label: "",
        name: "open_modal",
        sort: false,
      },{
        label: "",
        name: "delete_event",
        sort: false,
      }],
      visitorsCols: [{
        label: "Visitor Name",
        name: "name",
        filter: {
          type: "simple",
          placeholder: "Search Visitor's Names"
        },
        sort: true,
      },
      {
        label: "Visitor Email",
        name: "email",
        sort: true,
        filter: {
          type: "simple",
          placeholder: "Search Visitor's Emails"
        },
      },
      {
        label: "Event ID Attended",
        name: "event_id",
        filter: {
          type: "simple",
          placeholder: "Search Events Attended"
        },
        sort: true,
      },
      {
        label: "",
        name: "open_modal",
        sort: false,
      }],
      config: {
        pagination: false,
        checkbox_rows: false,
        rows_selectable: true,
        global_search: {
          visibility: false,
        },
        per_page: 20,
        per_page_options:  [20,  40,  60],
        show_refresh_button:  false,
        show_reset_button:  false,
      }
    }
  },
  props: {
    msg: String
  },
  components: {
    NavigationBar,
    Footer,
    VueBootstrap4Table,
    CreateEventModal
  },
  methods: {
    openModal (row) {
      this.$modal.show('events-modal', { row })
    },
    beforeOpen (event) {
      this.eventName = event.params.row.name
      this.dateHeld = event.params.row.date_held
      this.organizer = event.params.row.organizer
      this.startTime = event.params.row.start_time
      this.endTime = event.params.row.end_time
    },
    openVisitorModal (row) {
      this.$modal.show('visitors-modal', { row })
    },
    visitorBeforeOpen (event) {
      this.visitorName = event.params.row.name
      this.visitorEmail = event.params.row.email
      this.organizer = event.params.row.event_id
    },
    async deleteEvent (row) {
      // eslint-disable-next-line
      console.log(row);

      let del = confirm("Are you sure you want to delete this event?")

      if (del) {
        await AuthenticationService.deleteEvent({
          data: row
        })
      } else {
        return false
      }

      location.reload()
    }
  },
  async created () {
    try {
        const response = await AuthenticationService.getAllEvents({
        })

        const resp = await AuthenticationService.getAllVisitors({
        })

        // eslint-disable-next-line
        console.log('the resssssy for events: ', response)
        this.rows = response.data

        // eslint-disable-next-line
        console.log('the visitors: ', resp)
        this.visitorsRows = resp.data
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left {
  text-align: left;
  padding-left: 30px;
}
.right {
  float: right;
}
</style>
