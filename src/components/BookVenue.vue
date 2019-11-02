<template>
  <div>
    <NavigationBar></NavigationBar>
    <div>
      <b-alert v-model="showDismissibleAlert" variant="success" dismissible>
        You have successfully submitted your booking request! Please check your email to proceed with the booking process.
      </b-alert>
    </div>
    <h1> Book Venue </h1>
    <b-container>
      <b-row align-h="center" class="mt-5">
        <b-col cols="11">
          <b-card class="p-3">
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

                <b-form-group id="input-group-5" label="Desired date:" label-for="input-5">
                  <b-form-input
                    id="input-5"
                    v-model="form.date"
                    type="date"
                    required
                    placeholder="Enter desired booking date (DD/MM/YYYY) or select date from calendar below."
                  ></b-form-input>
                  <br />
                </b-form-group>

                <b-form-group id="input-group-6">
                  <b-form-checkbox-group v-model="form.checked" id="checkboxes-6">
                    <b-form-checkbox value="me">Check me out</b-form-checkbox>
                    <b-form-checkbox value="that">Check that out</b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>

                <b-button type="submit" pill variant="success">Submit</b-button>
                <b-button type="reset" pill variant="danger">Reset</b-button>
              </b-form>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
<!--
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <Footer> </Footer>
  </div>
</template>

<script>
import NavigationBar from './NavigationBar'
import Footer from './Footer'
import AuthenticationService from '../services/AuthenticationService'

export default {
    name: 'BookVenue',
    props: {
      msg: String
    },
    components: {
      NavigationBar,
      Footer
    },
    data() {
      return {
        form: {
          email: '',
          number: '',
          name: '',
          layout: null,
          date: '',
          checked: [],
        },
        showDismissibleAlert: false,
        layouts: [{ text: 'Select One', value: null }, 'Main Room', 'East Wing', 'West Wing', 'South Wing'],
        show: true
      }
    },
    methods: {
      async onSubmit(evt) {
        evt.preventDefault()
        // alert(JSON.stringify(this.form))
        this.showDismissibleAlert = true
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })

        // send confirmation email using send grid
        await AuthenticationService.sendEmail({
          email: this.form.email,
          form: this.form
        })

      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.date = ''
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
