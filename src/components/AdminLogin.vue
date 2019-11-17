<template>
  <div>
    <NavigationBar></NavigationBar>
    <br />
    <br />
    <!-- here -->
    <b-container class="size">
      <form class="border border-dark p-5">
        <p class="h1 mb-4">Admin login</p>
        <br />
        <!-- Email -->
        <input type="" class="form-control mb-4" placeholder="Username" v-model="username">
        <!-- Password -->
        <input type="password" class="form-control mb-4" placeholder="Password" v-model="password">
        <div class="error" v-html="error"/>
        <br />
        <div class="d-flex justify-content-around">
            <div>
                <!-- Remember me -->
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember">
                    <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                </div>
            </div>
            <div>
                <!-- Forgot password -->
                <a href="">Forgot password?</a>
            </div>
        </div>
        <br />
        <br />
        <!-- Sign in button -->
        <button @click="login" class="btn btn-info btn-block my-4" type="submit">Sign in</button>
      </form>
    </b-container>
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
import AuthenticationService from '../services/AuthenticationService'

export default {
  name: 'AdminLogin',
  data () {
    return {
      username: '',
      password: '',
      error: null,
    }
  },
  methods: {
    async login () {
      // eslint-disable-next-line
      console.log('hi')
      try {
        const response = await AuthenticationService.login({
          username: this.username,
          password: this.password   // TODO: salt and encrypt password
        })
        // eslint-disable-next-line
        console.log('res', response)
        // this.$root.$emit('userId', response.data.user[0].id)

        if (response.data.error) {
          alert('User does not exist.')
          return false
        }

        // this.$store.dispatch('setUser', response.data.user)
        // console.log('herrreee', this.$store.state.user[0].id)

        this.$router.push({
          name: 'adminpage'
        })

        // console.log('ressy', response.data)
      } catch (error) {
        // eslint-disable-next-line
        console.log('Error logging in.')
        this.error = error.response.data.error
      }
    }
  },
  props: {
    msg: String
  },
  components: {
    NavigationBar,
    Footer,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.size {
  width: 500px;
  margin: auto;
}
.error {
  color: red;
}
</style>
