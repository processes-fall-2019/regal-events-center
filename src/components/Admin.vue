<template>
  <div>
    <NavigationBar></NavigationBar>
    <h1> Admin Login </h1>
    <b-container>

    </b-container>
    <Footer> </Footer>
  </div>
</template>

<script>
import NavigationBar from './NavigationBar'
import Footer from './Footer'

export default {
  name: 'Admin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  props: {
    msg: String
  },
  components: {
    NavigationBar,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
