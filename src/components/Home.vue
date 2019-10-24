<template>
  <div class="hello">
    <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
      <link rel="stylesheet" type="text/css" href="pal.css">
    </head>
    <body class="front">


    <!--Navbar ...... make this into component-->
    <nav>
    <!-- <nav class="navbar navbar-inverse navbar-static-top noSpace back"> -->
      <div class="container-fluid">
        <b-navbar type="dark" variant="light">
          <h1> Regal Events Center </h1>
        </b-navbar>
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>
            <!-- Navbar dropdowns -->
            <!-- TODO: Fix dropdown text size -->
            <b-nav-item-dropdown text="About Us" right>
              <b-dropdown-item class="text" href="#">Grace</b-dropdown-item>
              <b-dropdown-item href="#">Testimonials</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item href="#">Gallery</b-nav-item>

            <b-nav-item-dropdown text="Events" right>
              <b-dropdown-item href="#">Upcoming Events</b-dropdown-item>
              <b-dropdown-item href="#">Past Events</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Venue" right>
              <b-dropdown-item href="#">Layout and Pricing</b-dropdown-item>
              <b-dropdown-item href="#">Book Venue</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Community" right>
              <b-dropdown-item href="#">Bulletin</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-navbar>
      </div>
    </nav>

    <div class="container-fluid" >
      <mdb-carousel :interval="8000" showControls showIndicators>
        <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="First slide" />
        <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" alt="Second slide" />
        <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg" alt="Third slide" />
      </mdb-carousel>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="panel">
          <div class="panel-heading mid"> Buttons </div>
          <div class="panel-body back">
            <nav>
              <router-link to="/aboutus">AboutUs route test</router-link>
            </nav>

            <router-link :to="{name: 'aboutus'}">
              <button> AboutUs route test </button>
            </router-link>

            <button type="button" class="btn go">Forward</button>
            <button type="button" class="btn danger">Back</button>
            <button type="button" class="btn mid">miscellaneous</button>
          </div>
        </div>
        </div>
        <div class="col-sm-4">
          <h3>Regal Events Center</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        </div>
        <div class="col-sm-4">
          <h3>Column 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        </div>
      </div>

      <!-- new row, also a form -->
      <div class="row">
        <div class="col-sm-4">
          <div class="panel">
            <div class="panel-heading mid"> Contact us </div>
            <div class="panel-body back">
              <form class="form-horizontal">
                <div class="form-group">
                  <label class="control-label col-sm-3" for="email">Email:</label>
                  <div class="col-sm-9">
                      <input type="email" class="form-control" id="email" placeholder="Enter email">
                    </div>
                  </div>
                <div class="form-group">
                  <label class="control-label col-sm-3" for="text">Message:</label>
                  <div class="col-sm-9">
                      <textarea type="input" class="form-control" id="text" placeholder="Enter message"> </textarea>
                    </div>
                  </div>
                <div class="form-group">
                  <div class="col-sm-offset-3 col-sm-9">
                    <button type="button" class="btn go">Submit</button>
                    <button type="button" class="btn danger">Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </body>
  </div>
</template>

<script>
import { mdbCarousel, mdbCarouselItem } from 'mdbvue';

export default {
  name: 'Home',
  components: {
    mdbCarousel,
    mdbCarouselItem
  },
  props: {
    msg: String
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
  font-size: 10px;
}
</style>
