<template>
  <div>
    <NavigationBar></NavigationBar>
    <h1> Upcoming Events </h1>
  </div>
</template>

<script>
import NavigationBar from './NavigationBar'

export default {
  name: 'UpcomingEvents',
  props: {
    msg: String
  },
  components: {
    NavigationBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
