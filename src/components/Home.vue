<template>
  <div class="hello">
    <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
    </head>
    <body class="front">
    <!--Navbar-->
    <NavigationBar></NavigationBar>

    <!--Carousel-->
    <div class="container-fluid" >
      <mdb-carousel :interval="8000" showControls showIndicators>
        <mdb-carousel-item img :src="require('@/assets/IMG_0286.png')" alt="First slide" />
        <mdb-carousel-item img :src="require('@/assets/IMG_6930.png')" alt="Second slide" />
        <mdb-carousel-item img :src="require('@/assets/IMG_0279.png')" alt="Third slide" />
        <mdb-carousel-item img :src="require('@/assets/IMG_0273.png')" alt="Fourth slide" />
      </mdb-carousel>
    </div>

    <!-- <img src="@/assets/IMG_0279.png"/> -->

    <b-container>
      <b-row>
        <b-col>
          <div class="panel-body back">
            <b-card>
              <b-col cols="11">
                <h3>Our Mission</h3>
                 <br>
                 <p>Here at Regal Events Center it is our mission to provide </p>
                 <p>an all-inclusive multicultural environment for advancement</p>
                 <p>of understanding and cooperation within our community. </p>
                 <br />
                 <p>We strive to provide a healthy, safe, and productive environment for all our visitors and employees.</p>
                 <br>
                 <br>
              </b-col>
            </b-card>
          </div>
        </b-col>
        <b-col cols="6">
          <br />
          <b-card>
            <div class="panel-heading mid"> Want to learn more? Sign up for our newsletters. </div>
            <div class="panel-body back">
              <b-form class="form-horizontal">
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
                    <b-button class="submitButton" @click="handleSubmitButton" size="lg" pill variant="success">Sign up</b-button>&nbsp;
                    <b-button class="cancelButton" @click="handleCancelButton" size="lg" pill variant="danger">Cancel</b-button>
                  </div>
                </div>
              </b-form>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <div class="container-fluid">
      <h3> Regal Events Center</h3>
      <p> 177 Anchor Rd </p>
      <p> Casselberry, FL, 32707</p>
      <br>
      <static-map :google-api-key="apiKey" :format="format" :markers="markers" :zoom="zoom" :center="center" :size="size" :type="type" :language="language"></static-map>
      <br>
      <br>
      <div>
        <b-button href="https://www.google.com/maps/place/Casselberry,+FL+32707/@28.6679392,-81.3472437,17z/data=!3m1!4b1!4m5!3m4!1s0x88e771fc709ad4d7:0x3283e0b5cba6fd8e!8m2!3d28.667934!4d-81.345055" size="lg" pill variant="primary">Get Directions</b-button>
      </div>
      <br>
      <br>
    </div>
    </body>
    <Footer> </Footer>
  </div>
</template>

<script>
import { mdbCarousel, mdbCarouselItem } from 'mdbvue';
import NavigationBar from './NavigationBar'
import Footer from './Footer'
import StaticMap from 'vue-static-map'
import AuthenticationService from '../services/AuthenticationService'

export default {
  name: 'Home',
  data () {
    return {
      email: '',
      message: '',
      error: null,
      apiKey: 'AIzaSyDtLtZiko5ZN-t4BZbYSfTiXJwBlD9uL9I',
      zoom: 13,
      center: 'Casselberry,FL',
      format: 'gif',
      language: 'en',
      markers: [
      {
       label: '', color: 'red', lat: 28.667869, lng: -81.345280, size: 'normal',
      },
      ],
      type: 'roadmap',
      size: [800, 400],
    }
  },
  components: {
    mdbCarousel,
    mdbCarouselItem,
    NavigationBar,
    StaticMap,
    Footer
  },
  props: {
    msg: String
  },
  methods: {
    async handleSubmitButton () {
      // add visitor to newsletter and visitors table in db
      await AuthenticationService.addVisitor({
        email: this.email,
        message: this.message
      })
    },
    handleCancelButton () {
      this.email = ''
      this.message = ''
    },
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
  display:inline-block;
  margin: auto;
  text-align: center;
}

.text {
  font-size: 10px;
}

.map {
  display:inline-block;
  margin: auto;
  text-align: center;
}

.submitButton {
  background-color: #1AD8D5;
  color: #2E282A;
}

.cancelButton {
  background-color:#E03C3C;
  color:#2E282A;
}
</style>
