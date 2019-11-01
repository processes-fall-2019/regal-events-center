<template>
  <div>
    <NavigationBar></NavigationBar>
    <h1> Testimonials </h1>
    <Footer> </Footer>
  </div>
</template>

<script>
import NavigationBar from './NavigationBar'
import Footer from './Footer'

export default {
  name: 'Testimonials',
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
