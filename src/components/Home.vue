<template>
  <div class="hello">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
      <!-- // <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> -->
      <!-- // <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script> -->
      <link rel="stylesheet" type="text/css" href="pal.css">
    </head>
    <body class="front">

    <!--Navbar -->
    <nav class="navbar navbar-inverse navbar-static-top noSpace back">
      <div class="container-fluid">

       <div class="navbar-header">
         <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Regal Events Center</a>
      </div>

      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Home</a></li>
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
          <ul class="dropdown-menu">
              <li><a href="#">Page 1-1</a></li>
              <li><a href="#">Page 1-2</a></li>
              <li><a href="#">Page 1-3</a></li>
            </ul>
          </li>
          <li><a href="#">Page 2</a></li>
          <li><a href="#">Page 3</a></li>
        </ul>
      </div>
      </div>
    </nav>

    <div class="container-fluid" >
        <div class="row mid">

          <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <!-- Wrapper for slides -->
          <div class="carousel-inner">
            <div class="item active">
              <img src="pic.jpg" alt="Alt text" style="width:100%; height:300px;">
              <div class="carousel-caption">
                  <h3>Main Room</h3>
                  <p>Contact us for availability</p>
                </div>
               </div>
               <div class="item">
                 <img src="pic.jpg" alt="Alt text" style="width:100%; height:300px;">
                 <div class="carousel-caption">
                  <h3>Main Room</h3>
                  <p>Contact us for availability</p>
                 </div>
               </div>
             </div>

            <!-- Left and right controls -->
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"></span>
               <span class="sr-only">Previous</span>
              </a>
              <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
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
          <div class="panel">
            <div class="panel-heading mid"> Contact us </div>
            <div class="panel-body back">
              <form class="form-horizontal">
                <div class="form-group">
                  <label class="control-label col-sm-3" for="email">Email:</label>
                  <div class="col-sm-9">
                      <input type="email" class="form-control" id="email" placeholder="Enter email">
                    </div>
                  </div>
                <div class="form-group">
                  <label class="control-label col-sm-3" for="text">Message:</label>
                  <div class="col-sm-9">
                      <textarea type="input" class="form-control" id="text" placeholder="Enter message"> </textarea>
                    </div>
                  </div>
                <div class="form-group">
                  <div class="col-sm-offset-3 col-sm-9">
                    <button type="button" class="btn go">Submit</button>
                    <button type="button" class="btn danger">Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </body>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
