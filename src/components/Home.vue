<template>
  <div class="hello">
    <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    </head>
    <!--Navbar-->
    <NavigationBar></NavigationBar>

    <!--Carousel-->
    <div class="container-fluid" >
      <mdb-carousel :interval="8000" showControls showIndicators>
        <mdb-carousel-item img :src="require('@/assets/IMG_0286.png')" alt="First slide" />
        <mdb-carousel-item img :src="require('@/assets/IMG_6930.png')" alt="Second slide" />
        <mdb-carousel-item img :src="require('@/assets/IMG_0273.png')" alt="Third slide" />
      </mdb-carousel>
    </div>
    <br />
    <br />
    <b-container>
      <b-row>
        <b-col>
          <div class="panel-body back">
            <b-card class="dark">
              <div class="panel-heading mid txt"> Our Mission </div>
              <b-col>
                 <br>
                 <p class="mission-txt">Here at Regal Events Center it is our mission to provide </p>
                 <p class="mission-txt">an all-inclusive multicultural environment for advancement</p>
                 <p class="mission-txt">of understanding and cooperation within our community. </p>
                 <br />
                 <p class="mission-txt">We strive to provide a healthy, safe, and productive environment for all our visitors and employees.</p>
                 <br>
                 <br>
              </b-col>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <br />
          <b-card class="dark">
            <div class="panel-heading mid txt"> Want to learn more? Sign up for our newsletters. </div>
            <div class="panel-body back">
              <b-form v-if="show" @submit="handleSubmitButton" class="form-horizontal">
                <div class="form-group">
                  <label class="control-label col-sm-3" for="email">Email:</label>
                  <div class="col-sm-9">
                    <b-form-input
                      v-model="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                    ></b-form-input>
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
                    <b-button class="submitButton" type="submit" size="lg" pill variant="success">Sign up</b-button>&nbsp;
                    <b-button class="cancelButton" @click="handleCancelButton" size="lg" pill variant="danger">Cancel</b-button>
                  </div>
                </div>
              </b-form>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <br />
    <Footer> </Footer>
  </div>
</template>

<script>
import { mdbCarousel, mdbCarouselItem } from 'mdbvue';
import NavigationBar from './NavigationBar'
import Footer from './Footer'
import AuthenticationService from '../services/AuthenticationService'

export default {
  name: 'Home',
  data () {
    return {
      email: '',
      message: '',
      error: null,
      show: true,
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
    Footer
  },
  props: {
    msg: String
  },
  methods: {
    async handleSubmitButton (evt) {
      evt.preventDefault()
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })

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
  color: black;
}

.cancelButton {
  color: black;
}

.dark {
  background-color:#2E282A;
  color:#FFFAF2;
}

.mid {
  background-color:#FFB775;
  color:#2E282A;
}

.txt {
  font-size: 20px;
}

.mission-txt {
  font-size: 17.5px;
}
</style>
