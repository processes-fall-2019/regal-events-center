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
         <button class="btn btn-primary">View Details</button>
       </template>
      </vue-bootstrap4-table>
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
import VueBootstrap4Table from 'vue-bootstrap4-table'
import Footer from './Footer'
// import PastEventModal from "./PastEventModal.vue"

export default {
  name: 'PastEvents',
  data () {
    return {
      rows: [{
        "id": 1,
        "name": "Grace event",
        "location": "Orlando",
        "date_held": "12/07/2018",
      },
      {
        "id": 2,
        "name": "The Carter's Wedding",
        "location": "California",
        "date_held": "04/07/2017",
      },
      {
        "id": 3,
        "name": "Meet Your Community",
        "location": "Orlando",
        "date_held": "01/01/2018",
      },
      {
        "id": 4,
        "name": "Meet Your Community",
        "location": "Orlando",
        "date_held": "01/01/2018",
      },
      {
        "id": 5,
        "name": "Meet Your Community",
        "location": "Orlando",
        "date_held": "01/01/2018",
      },
      {
        "id": 6,
        "name": "Meet Your Community",
        "location": "Orlando",
        "date_held": "01/01/2018",
      }],
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
        label: "Location",
        name: "location",
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
    Footer
  },
  methods: {
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
