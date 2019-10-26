<template>
  <div>
    <NavigationBar></NavigationBar>
    <div>
      <b-alert v-model="showDismissibleAlert" variant="success" dismissible>
        You have successfully submitted your booking request! We will get back to you via email within 24 hrs.
      </b-alert>
    </div>
    <h1> Book Venue </h1>

    <div class="form">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >

          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>

        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Phone Number:"
          label-for="input-1"
          description="We'll never share your phone number with anyone else."
        >

          <b-form-input
            id="input-2"
            v-model="form.number"
            type="number"
            required
            placeholder="Enter phone number"
          ></b-form-input>

        </b-form-group>

        <b-form-group id="input-group-3" label="Your Name:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.name"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Layout:" label-for="input-4">
          <b-form-select
            id="input-4"
            v-model="form.layout"
            :options="layouts"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-5">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-5">
            <b-form-checkbox value="me">Check me out</b-form-checkbox>
            <b-form-checkbox value="that">Check that out</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" pill variant="success">Submit</b-button>
        <b-button type="reset" pill variant="danger">Reset</b-button>
      </b-form>
    </div>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import NavigationBar from './NavigationBar'

export default {
    name: 'BookVenue',
    props: {
      msg: String
    },
    components: {
      NavigationBar
    },
    data() {
      return {
        form: {
          email: '',
          number: '',
          name: '',
          layout: null,
          checked: [],
        },
        showDismissibleAlert: false,
        layouts: [{ text: 'Select One', value: null }, 'Main Room', 'East Wing', 'West Wing', 'South Wing'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        // alert(JSON.stringify(this.form))
        this.showDismissibleAlert = true
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.showDismissibleAlert = false
        this.form.number = ''
        this.form.layout = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  width: 800px;
  margin: auto;
}
</style>
