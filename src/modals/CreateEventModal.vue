<template>
  <!-- <modal :class="`modal-container`"
    :name="modalName"
    height="auto"
    width="1000px"
    :scrollable="true"
    @before-open="beforeOpen">

    <input type="" class="form-control mb-4" placeholder="Event name" v-model="eventName">
    <input type="" class="form-control mb-4" placeholder="Date held" v-model="dateHeld">

    <b-button class="center" pill variant="success">Create Event</b-button>
    <br />
    <br />
  </modal> -->
  <div>
    <mdb-btn color="primary" @click.native="modal = true">Create an event</mdb-btn>
    <mdb-modal :show="modal" @close="modal = false">
      <mdb-modal-header>
        <mdb-modal-title>Input event fields</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <input type="" class="form-control mb-4" placeholder="Event name" v-model="eventName">
        <input type="date" class="form-control mb-4" placeholder="Date held" v-model="dateHeld">
        <input type="time" class="form-control mb-4" placeholder="Start time" v-model="startTime">
        <input type="time" class="form-control mb-4" placeholder="End time" v-model="endTime">
        <input type="" class="form-control mb-4" placeholder="Organizer" v-model="organizer">
        <textarea type="input" class="form-control" placeholder="Enter comments" v-model="message"> </textarea>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="danger" @click.native="modal = false">Close</mdb-btn>
        <mdb-btn @click="createEvent" color="success">Create Event</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </div>
</template>

<script>
import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn } from 'mdbvue'
import AuthenticationService from '../services/AuthenticationService'

export default {
  components: {
    mdbModal,
      mdbModalHeader,
      mdbModalTitle,
      mdbModalBody,
      mdbModalFooter,
      mdbBtn
  },
  data () {
    return {
      modalName: 'events-modal',
      eventName: '',
      dateHeld: '',
      startTime: '',
      endTime: '',
      organizer: '',
      message: '',
      modal: false
    }
  },
  methods: {
    beforeOpen () {
      // this.eventRows = event.params.row.events
      // this.identRows = event.params.row.identifiers
      // this.attrRows = event.params.row.attributes
    },
    async createEvent () {
      await AuthenticationService.createAnEvent({
        eventName: this.eventName,
        dateHeld: this.dateHeld,
        startTime: this.startTime,
        endTime: this.endTime,
        organizer: this.organizer,
        message: this.message
      })

      this.modal = false
    }
  },
}
</script>

<style scoped>
.center {
  margin: auto;
}
</style>
