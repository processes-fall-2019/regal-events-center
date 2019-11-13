import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Grace from '@/components/Grace'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import UpcomingEvents from '@/components/UpcomingEvents'
import PastEvents from '@/components/PastEvents'
import VenueLayout from '@/components/VenueLayout'
import BookVenue from '@/components/BookVenue'
import Bulletin from '@/components/Bulletin'
import AdminLogin from '@/components/AdminLogin'
import AdminPage from '@/components/AdminPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/grace',
      name: 'grace',
      component: Grace
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/testimonials',
      name: 'testimonials',
      component: Testimonials
    },
    {
      path: '/upcomingevents',
      name: 'upcomingevents',
      component: UpcomingEvents
    },
    {
      path: '/pastevents',
      name: 'pastevents',
      component: PastEvents
    },
    {
      path: '/venuelayout',
      name: 'venuelayout',
      component: VenueLayout
    },
    {
      path: '/bookvenue',
      name: 'bookvenue',
      component: BookVenue
    },
    {
      path: '/bulletin',
      name: 'bulletin',
      component: Bulletin
    },
    {
      path: '/adminlogin',
      name: 'adminlogin',
      component: AdminLogin
    },
    {
      path: '/adminpage',
      name: 'adminpage',
      component: AdminPage
    },
  ]
})
