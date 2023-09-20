
const express = require('express')
const path = require("path");
const cors = require('cors');
const app = express();

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.

const corsOptions = {
  origin: 'https://kajiwoto.cyclic.cloud', // Replace with your actual domain
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions)); // for CORS access 


var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}
app.use(express.static('build', options))

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`React app listening at http://localhost:${port}`)
})
