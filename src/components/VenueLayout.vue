<template>
  <div>
    <NavigationBar></NavigationBar>
    <h1> Layout and Pricing </h1>
    <br />
    <br />
    <div class="layout">
      <b-card no-body>
        <b-tabs card>
          <b-tab no-body title="Main Room">
            <b-card-img bottom img :src="require('@/assets/IMG_0393.png')"></b-card-img>
            <b-card-footer>Picture 1 footer</b-card-footer>
          </b-tab>

          <b-tab no-body title="East Wing">
            <b-card-img bottom img :src="require('@/assets/IMG_0312.png')"></b-card-img>
            <b-card-footer>Picture 2 footer</b-card-footer>
          </b-tab>

          <b-tab no-body title="West Wing">
            <b-card-img bottom img :src="require('@/assets/IMG_0327.png')"></b-card-img>
            <b-card-footer>Picture 3 footer</b-card-footer>
          </b-tab>

          <b-tab no-body title="South Wing">
            <b-card-img bottom img :src="require('@/assets/IMG_1838.png')"></b-card-img>
            <b-card-footer>Picture 3 footer</b-card-footer>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
    <Footer> </Footer>
  </div>
</template>

<script>
import NavigationBar from './NavigationBar'
import Footer from './Footer'

export default {
  name: 'VenueLayout',
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
.layout {
  /* padding-left: 5%;
  padding-right: 5%; */
  padding-bottom: 5%;
  width: 50%;
  margin: auto;
}
</style>
