<template>
  <div class="hello">
    <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
      <!-- <meta charset="utf-8"> -->
      <!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->
      <!-- <meta name="viewport" content="width=device-width"> -->
    </head>
    <!-- <b-navbar class="this" toggleable="lg" type="dark" variant="dark">
      <b-nabvar-nav>
      </b-nabvar-nav>
    </b-navbar> -->
        <div class="container-fluid">
          <div>
            <img class="img-fluid center" src="@/assets/logooo.png"/>
          </div>

          <b-navbar class="pos" toggleable="lg" type="dark" variant="dark">
            <b-navbar-nav>
              <b-nav-item href="#/">Home</b-nav-item>
              <b-nav-item-dropdown text="About Us" right>
                <b-dropdown-item class="text" href="#/grace">G.R.A.C.E</b-dropdown-item>
                <b-dropdown-item href="#/testimonials">Testimonials</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item href="#/gallery">Gallery</b-nav-item>

              <b-nav-item-dropdown text="Events" right>
                <b-dropdown-item href="#/upcomingevents">Upcoming Events</b-dropdown-item>
                <b-dropdown-item href="#/pastevents">Past Events</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item href="#/venuelayout">Layouts and Pricing</b-nav-item>
              <b-nav-item href="#/bookvenue">Book Venue</b-nav-item>
              <b-nav-item href="#/bulletin">Community Bulletin</b-nav-item>
            </b-navbar-nav>
          </b-navbar>
        </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  props: {
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

/* .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width:50%;
} */

.center {
  width:500px; /* you can use % */
  height: auto;
}

/* .pos {
  position: fixed;
  top: 0;
  z-index:2;
  width: 98%;
} */

</style>
