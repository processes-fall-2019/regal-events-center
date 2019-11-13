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
       <template slot="open_modal">
         <!-- <button class="btn btn-primary" @click="openVisitorModal(props.row)">View Details</button> -->
         <button class="btn btn-primary">View Details</button>
       </template>
      </vue-bootstrap4-table>
    </div>
    <!-- <b-button @click="createEvent" pill variant="success">Create an Event</b-button> -->

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
       <template slot="open_modal">
         <!-- <button class="btn btn-primary" @click="openVisitorModal(props.row)">View Details</button> -->
         <button class="btn btn-primary">View Details</button>
       </template>
      </vue-bootstrap4-table>
    </div>
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
    createEvent () {
      this.$modal.show('events-modal')
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
