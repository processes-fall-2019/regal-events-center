<template>
  <div>
    <NavigationBar></NavigationBar>

    <lightbox
        :images="images"
        title="Photo Gallery"
        :loop="true"
        :nav="true"
        :caption="true"
    ></lightbox>
    <br>
    <br>
    <br>
    <Footer> </Footer>
  </div>
</template>

<script>
import NavigationBar from './NavigationBar'
import Footer from './Footer'

 export default {
   components: {
     NavigationBar,
     Footer
   },
   data() {
     return {
       images: [
         {
           src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
           caption: 'Image 1',
         },
         {
           src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
         },
         {
           src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
           caption: 'Image 1',
         },
         {
           src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
         },
         {
           src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
           caption: 'Image 1',
         },
         {
           src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
         },
         {
           src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
         },
         {
           src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
           caption: 'Image 1',
         },
         {
           src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
         },
       ],
       visible: false,
       index: 0
     };
   },
   methods: {
     showImg (index) {
       this.index = index;
       this.visible = true;
     },
     handleHide () {
       this.visible = false;
     }
   }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
