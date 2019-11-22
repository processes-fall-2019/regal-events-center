<template>
  <div>
    <NavigationBar></NavigationBar>
    <h1> G.R.A.C.E </h1>

    <div class="video">
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/HmZKgaHa3Fg"
        allowfullscreen
      >
      </b-embed>
    </div>
    <Footer> </Footer>
  </div>
</template>

<script>
import NavigationBar from './NavigationBar'
import Footer from './Footer'

export default {
  name: 'Grace',
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
  .video {
    padding-top: 2%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
  }
</style>
