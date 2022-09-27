const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');

// Require Dummy routes
const dummyRoutes = require('./src/routes/dummy.route')
const otherRoutes = require('./src/routes/other.route')

// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 80;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("NodeJs + Express + MongoDb");
});

//enable cors
app.use(cors())

// using as middleware
app.use('/api/dummy', dummyRoutes)
app.use('/api/other', otherRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});