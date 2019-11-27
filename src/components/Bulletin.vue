<template>
  <div>
    <NavigationBar></NavigationBar>
    <h1> Bulletin </h1>
    <br />
    <br />

    <!-- main body of our application -->
    <div class="container" id="events">

      <!-- add an event form -->
      <div class="col-sm-6 col-sm-offset-3">
        <div class="panel panel-default">
            <div class="panel-heading">
              <h3>Add a post</h3>
            </div>

            <div class="panel-body">
              <div class="form-group">
                <input class="form-control" placeholder="Post Name" v-model="event.name">
              </div>

              <div class="form-group">
                <textarea class="form-control" placeholder="Post Description" v-model="event.description"></textarea>
              </div>

              <div class="form-group">
                <input type="date" class="form-control" placeholder="Date" v-model="event.date">
              </div>

              <button class="btn btn-primary" v-on:click="addEvent">Submit</button>
            </div>
        </div>
      </div>

      <!-- show the events -->
      <div class="col-sm-6 col-sm-offset-3">
        <div class="list-group">

          <a class="list-group-item" v-for="event in events" :key="event.id">
            <h4 class="list-group-item-heading">
              <i class="glyphicon glyphicon-bullhorn"></i>
              {{ event.name }}
            </h4>

            <h5>
              <i class="glyphicon glyphicon-calendar" v-if="event.date"></i>
              {{ event.date }}
            </h5>

            <p class="list-group-item-text" v-if="event.description">{{ event.description }}</p>

            <button class="btn btn-xs btn-danger" v-on:click="deleteEvent(index)">Delete</button>
          </a>

        </div>
      </div>
    </div>

    <Footer> </Footer>
  </div>
</template>

<script>
import NavigationBar from './NavigationBar'
import Footer from './Footer'

export default {
  data () {
    return {
      index: 0,
      event: { name: '', description: '', date: '' },
      events: []
    }
  },
  created () {
    this.events = [
      {
        id: 1,
        name: 'Film Premiere',
        description: 'Go watch that movie.',
        date: '11-30-2019'
      },
      {
        id: 2,
        name: 'Bonfire Night',
        description: 'Hotdogs and pyrotechnics.',
        date: '12-07-2019'
      },
    ]

    // this.$set('events', this.events);

  },
  methods: {
    addEvent () {
      if(this.event.name) {
        this.events.push(this.event);
        this.event = { name: '', description: '', date: '' };
      }
    },
    deleteEvent (index) {
      if (confirm('Are you sure you want to delete this event?')) {
        this.events.splice(index,1);
      }
    }
  },
  components: {
    NavigationBar,
    Footer
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
