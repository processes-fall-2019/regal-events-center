<template>
  <div class="hello">
    <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    </head>
    <body class="front">
      <!-- Navbar -->
      <nav>
      <!-- <nav class="navbar navbar-inverse navbar-static-top noSpace back"> -->
        <div class="container-fluid">
          <b-navbar type="dark" variant="light">
            <h1> Regal Events Center </h1>
          </b-navbar>

          <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
              <b-nav-item href="#/">Home</b-nav-item>
              <!-- Navbar dropdowns -->
              <!-- TODO: Fix dropdown text size -->
              <b-nav-item-dropdown text="About Us" right>
                <b-dropdown-item class="text" href="#/grace">Grace</b-dropdown-item>
                <b-dropdown-item href="#/testimonials">Testimonials</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item href="#/gallery">Gallery</b-nav-item>

              <b-nav-item-dropdown text="Events" right>
                <b-dropdown-item href="#/upcomingevents">Upcoming Events</b-dropdown-item>
                <b-dropdown-item href="#/pastevents">Past Events</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown text="Venue" right>
                <b-dropdown-item href="#/venuelayout">Layout and Pricing</b-dropdown-item>
                <b-dropdown-item href="#/bookvenue">Book Venue</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown text="Community" right>
                <b-dropdown-item href="#/bulletin">Bulletin</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-navbar>
        </div>
      </nav>
    </body>
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
</style>
