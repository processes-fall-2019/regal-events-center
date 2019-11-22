<template>
  <div>
    <NavigationBar></NavigationBar>
    <h1> Past Events </h1>
    <br>
    <div class="table">
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
         <button @click="openModal" class="btn btn-primary">View Details</button>
       </template>
      </vue-bootstrap4-table>
    </div>

    <div>
      <mdb-modal :show="modal" @close="modal = false">
        <mdb-modal-header>
          <mdb-modal-title>Event details</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <h4 class="my-4">Event name: {{ this.eventName }}</h4>
          <h4 class="my-4">Date held: {{ this.dateHeld }}</h4>
          <h4 class="my-4">Organizer: {{ this.organizer }}</h4>
          <br />
          <br />
          <h4 class="my-4">Space for pictures and info</h4>
        </mdb-modal-body>
        <mdb-modal-footer>
          <mdb-btn color="danger" @click.native="modal = false">Close</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>
    </div>
    <!-- <ViewEventDetailsModal></ViewEventDetailsModal> -->
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
import VueBootstrap4Table from 'vue-bootstrap4-table'
import Footer from './Footer'
import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn } from 'mdbvue'
import AuthenticationService from '../services/AuthenticationService'
// import ViewEventDetailsModal from '../modals/ViewEventDetailsModal'

export default {
  name: 'PastEvents',
  data () {
    return {
      test: 1,
      eventName: '',
      dateHeld: '',
      organizer: '',
      modal: false,
      rows: [],
      columns: [{
        label: "id",
        name: "id",
        sort: true,
      },
      {
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
    VueBootstrap4Table,
    Footer,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbBtn,
    // ViewEventDetailsModal
  },
  methods: {
    openModal () {
      this.modal = true
    }
  },
  async created () {
    try {
        const response = await AuthenticationService.getPastEvents({
          event_id: this.test
        })

        // eslint-disable-next-line
        console.log('the resssssy', response)

        this.rows = response.data

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
.table {
  position:relative;
  display:inline-block;
  top:50%;
}
</style>
