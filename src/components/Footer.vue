<template>
  <div class="hello">
    <!-- Footer -->
  <mdb-footer color="stylish-color-dark" class="page-footer font-medium pt-4 mt-4">
    <mdb-container class="text-left">
      <mdb-row>
        <mdb-col md="6">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Footer Content</h5>
          <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit.</p>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
        <mdb-col md="2">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
          <ul class="list-unstyled">
            <li><a href="#/">Home</a></li>
            <li><a href="#/grace">Grace</a></li>
            <li><a href="#/testimonials">Testimonials</a></li>
            <li><a href="#/gallery">Gallery</a></li>
          </ul>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
        <mdb-col md="2">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
          <ul class="list-unstyled">
            <li><a href="#/upcomingevents">Upcoming Events</a></li>
            <li><a href="#/pastevents">Past Events</a></li>
            <li><a href="#/venuelayout">Layout & Pricing</a></li>
            <li><a href="#/bookvenue">Book Venue</a></li>
          </ul>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
        <mdb-col md="2">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
          <ul class="list-unstyled">
            <li><a href="#/bulletin">Bulletin</a></li>
          </ul>
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
        <li class="list-inline-item"><a href="#" class="btn btn-primary btn-rounded">Book an event!</a></li>
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
  margin: 40px 0 0;
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

.text {
  font-size: 20px;
}

.color {
  background: Orange;
}
</style>
