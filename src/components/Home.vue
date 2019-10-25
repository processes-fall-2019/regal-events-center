<template>
  <div class="hello">
    <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    </head>
    <body class="front">
    <!--Navbar-->
    <NavigationBar></NavigationBar>

    <!--Carousel-->
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
            <div class="panel-heading mid"> Contact us </div>
            <div class="panel-body back">
              <form class="form-horizontal">
                <div class="form-group">
                  <label class="control-label col-sm-3" for="email">Email:</label>
                  <div class="col-sm-9">
                      <input class="form-control" id="email" name="email" v-model="email" type="email"  placeholder="Enter email">
                    </div>
                  </div>
                <div class="form-group">
                  <label class="control-label col-sm-3" for="text">Message:</label>
                  <div class="col-sm-9">
                      <textarea type="input" class="form-control" id="text" name="message" v-model="message" placeholder="Enter message"> </textarea>
                    </div>
                  </div>
                <div class="form-group">
                  <div class="col-sm-offset-3 col-sm-9">
                    <button @click="handleSubmitButton" type="button" class="btn go">Submit</button>
                    <button @click="handleCancelButton" type="button" class="btn danger">Cancel</button>
                  </div>
                </div>
              </form>
            </div>
        </div>
      </div> <!-- here -->
    </div>
    </body>
  </div>
</template>

<script>
import { mdbCarousel, mdbCarouselItem } from 'mdbvue';
import NavigationBar from './NavigationBar'

export default {
  name: 'Home',
  data () {
    return {
      email: '',
      message: '',
      error: null,
    }
  },
  components: {
    mdbCarousel,
    mdbCarouselItem,
    NavigationBar
  },
  props: {
    msg: String
  },
  methods: {
    handleSubmitButton () {
      // eslint-disable-next-line
      console.log("Email", this.email);
      // eslint-disable-next-line
      console.log("Message", this.message);
    },
    handleCancelButton () {
      this.email = ''
      this.message = ''
    }
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
