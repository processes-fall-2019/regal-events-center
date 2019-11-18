<template>
  <div>
    <NavigationBar></NavigationBar>
    <h1> Layouts and Pricing </h1>
    <br />
    <br />
    <div class="layout">
      <b-card no-body class="dark">
        <b-tabs card>
          <b-tab no-body title="Main Room">
            <b-card-img bottom img :src="require('@/assets/IMG_0393.png')"></b-card-img>
            <b-card-footer>
              Pricing: $150.00 per hour, 4 hour minimum.
            </b-card-footer>
            <b-card-footer>
              Extras: 3 screen projectors hooked up to audio and visual enhancement equipment.
            </b-card-footer>
            <b-card-footer>
              $250.00 deposit required for reservation.
            </b-card-footer>
          </b-tab>

          <b-tab no-body title="East Wing">
            <b-card-img bottom img :src="require('@/assets/IMG_0312.png')"></b-card-img>
            <b-card-footer>
              Pricing: $75.00 per hour, 4 hour minimum.
            </b-card-footer>
            <b-card-footer>
              $250.00 deposit required for reservation.
            </b-card-footer>
          </b-tab>

          <b-tab no-body title="West Wing">
            <b-card-img bottom img :src="require('@/assets/IMG_0327.png')"></b-card-img>
            <b-card-footer>
              Pricing: $75.00 per hour, 4 hour minimum.
            </b-card-footer>
            <b-card-footer>
              $250.00 deposit required for reservation.
            </b-card-footer>
          </b-tab>

          <b-tab no-body title="South Wing">
            <b-card-img bottom img :src="require('@/assets/IMG_1838.png')"></b-card-img>
            <b-card-footer>
              Pricing: $75.00 per hour, 4 hour minimum.
            </b-card-footer>
            <b-card-footer>
              $250.00 deposit required for reservation.
            </b-card-footer>
          </b-tab>

          <b-tab no-body title="Additional Info">
            <b-card-footer>
              Kitchen use: $75.00 per hour, 4 hour minimum.
            </b-card-footer>
            <b-card-footer>
              72 inch round tables and chair are included for all layouts. Tables sit 10 people.
            </b-card-footer>
            <b-card-footer>
              Table clothes and chair covers are NOT included.
            </b-card-footer>
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
  width: 60%;
  margin: auto;
}

.dark {
  background-color:#2E282A;
  color:#FFFAF2;
}
</style>
