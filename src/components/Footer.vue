<template>
  <div class="hello">
    <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
    </head>
    <!-- Footer -->
    <mdb-footer color="stylish-color-dark" class="page-footer font-medium pt-4 mt-4">
      <mdb-container class="text-left">
        <mdb-row>
          <mdb-col md="6" class="center">
            <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Come visit us!</h5>
            <img class="image" src="@/assets/regal-map.png"/>
          </mdb-col>
          <mdb-col md="4">
            <ul class="list-unstyled">
              <div class="center">
                <h3> Regal Events Center</h3>
                <br>
                <p> 177 Anchor Rd </p>
                <p> Casselberry, FL, 32707</p>
                <p> 123-456-7890 </p>
                <br />
                <b-button href="https://www.google.com/maps/place/Casselberry,+FL+32707/@28.6679392,-81.3472437,17z/data=!3m1!4b1!4m5!3m4!1s0x88e771fc709ad4d7:0x3283e0b5cba6fd8e!8m2!3d28.667934!4d-81.345055" size="lg" pill variant="primary" class="but">Get Directions</b-button>
              </div>
              <br />
            </ul>
          </mdb-col>
          <hr class="clearfix w-100 d-md-none" />
          <mdb-col md="2">
            <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Nav Links</h5>
            <ul class="list-unstyled">
              <li><a href="#/">Home</a></li>
              <li><a href="#/grace">Grace</a></li>
              <li><a href="#/testimonials">Testimonials</a></li>
              <li><a href="#/gallery">Gallery</a></li>
              <li><a href="#/bulletin">Bulletin</a></li>
              <li><a href="#/upcomingevents">Upcoming Events</a></li>
              <li><a href="#/pastevents">Past Events</a></li>
              <li><a href="#/venuelayout">Layout & Pricing</a></li>
              <li><a href="#/bookvenue">Book Venue</a></li>
            </ul>
            <br />
            <br />
            <li><a class="admin" href="#/adminlogin">Admin Login</a></li>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      <br />
      <hr />
      <div class="text-center py-3">
        <ul class="list-unstyled list-inline mb-0">
          <li class="list-inline-item">
            <h5 class="mb-1">Reserve an event today</h5>
          </li>
          <li class="list-inline-item"><a href="#/bookvenue" class="btn btn-primary btn-rounded">Book an event!</a></li>
        </ul>
      </div>
      <hr />
      <div class="text-center">
        <ul class="list-unstyled list-inline">
          <br />
          <li class="list-inline-item"><a class="btn-floating btn-lg btn-fb mx-1"><i class="fab fa-facebook"> </i></a></li>
          <li class="list-inline-item"><a class="btn-floating btn-lg btn-tw mx-1"><i class="fab fa-twitter"> </i></a></li>
        </ul>
      </div>
      <br />
      <div class="footer-copyright text-center py-3">
        <mdb-container fluid>
          &copy; 2019 Copyright: <a href="#/"> Regal Events Center </a>
        </mdb-container>
      </div>
    </mdb-footer>
    <!-- Footer -->
  </div>
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue'

export default {
  name: 'Footer',
  props: {
  },
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
}
h3 {
  margin: 60px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.container-fluid {
  font-size: 20px;
}

.admin {
  color: gray;
}

.center {
  text-align: center;
}

.image {
  width: 65%;
  height: 75%;
  text-align: center;
}

.color {
  background: Orange;
}
</style>
