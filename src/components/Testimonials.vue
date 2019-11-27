<template>
  <div>
    <NavigationBar></NavigationBar>
    <h1> Testimonials </h1>



    <mdb-container>
    <section class="text-center my-5">
      <p class="dark-grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
      <mdb-row>
        <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
          <mdb-card testimonial>
            <mdb-card-up color="info"></mdb-card-up>
            <br />
            <mdb-avatar class="pad mx-auto white">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" class="rounded-circle img-fluid"/>
            </mdb-avatar>
            <mdb-card-body>
              <h4 class="font-weight-bold mb-4">John Doe</h4>
              <hr/>
              <p class="dark-grey-text mt-4"><mdb-icon icon="quote-left" class="pr-2"></mdb-icon>Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.</p>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col lg="4" md="6" class="mb-lg-0 mb-4">
          <mdb-card testimonial>
            <mdb-card-up gradient="blue"></mdb-card-up>
            <br />
            <mdb-avatar class="mx-auto white">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" class="rounded-circle img-fluid"/>
            </mdb-avatar>
            <mdb-card-body>
              <h4 class="font-weight-bold mb-4">Anna Aston</h4>
              <hr/>
              <p class="dark-grey-text mt-4"><i class="fas fa-quote-left pr-2"></i>Neque cupiditate assumenda in maiores repudiandae mollitia architecto.</p>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col lg="4" md="6" class="mb-lg-0 mb-4">
          <mdb-card testimonial>
            <mdb-card-up class="indigo"></mdb-card-up>
            <br />
            <mdb-avatar class="mx-auto white">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle img-fluid"/>
            </mdb-avatar>
            <mdb-card-body>
              <h4 class="font-weight-bold mb-4">Maria Kate</h4>
              <hr/>
              <p class="dark-grey-text mt-4"><i class="fas fa-quote-left pr-2"></i>Delectus impedit saepe officiis ab aliquam repellat rem unde ducimus.</p>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container>
  <br />
  <br />

    <Footer> </Footer>
  </div>
</template>

<script>
import NavigationBar from './NavigationBar'
import Footer from './Footer'
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardBody, mdbCardUp, mdbAvatar, mdbIcon } from 'mdbvue'

export default {
  name: 'Testimonials',
  props: {
    msg: String
  },
  components: {
    NavigationBar,
    Footer,
    mdbContainer,
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardBody,
      mdbCardUp,
      mdbAvatar,
      mdbIcon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .pad {
  padding-top: 5%;
} */
</style>
