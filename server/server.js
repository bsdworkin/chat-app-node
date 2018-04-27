const path = require('path');
const express = require('express');

//Used to get path to public directory 
const publicPath = path.join(__dirname, '../public');
//Configure for heroku
const port = process.env.PORT || 3000;
//To configure express applicaiton
var app = express();

app.use(express.static(publicPath));

app.listen(3000, ()=>{
	console.log('Server is up');
});

