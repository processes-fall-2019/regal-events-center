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
           src: require('../assets/IMG_1838.png'),
         },
         {
           src: require('../assets/IMG_0312.png'),
           caption: 'Main Room Layout',
         },
         {
           src: require('../assets/IMG_0327.png'),
           caption: 'Main Room Layout',
         },
         {
           src: require('../assets/IMG_0393.png'),
           caption: 'Main Room Layout with chairs',
         },
         {
           src: require('../assets/IMG_0395.png'),
           caption: 'Main Room Layout with chairs',
         },
         {
           src: require('../assets/IMG_0534.png'),
           caption: 'Main Room Layout with chairs and round tables',
         },
         {
           src: require('../assets/IMG_0535.png'),
           caption: 'Main Room Layout with chairs and round tables',
         },
         {
           src: require('../assets/IMG_0536.png'),
           caption: 'Main Room Layout with chairs and round tables',
         },
         {
           src: require('../assets/IMG_1442.png'),
         },
         {
           src: require('../assets/IMG_1836.png'),
         },
         {
           src: require('../assets/IMG_2503.png'),
         },
         {
           src: require('../assets/IMG_2523.png'),
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
