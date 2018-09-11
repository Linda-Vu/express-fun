const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/names/:name',(request, response) => {
  response.send(`Hello ${request.params.name}`);
});

app.get('/lastName/:name',(request, response) => {
  response.send(`Your last name is ${request.params['name']}`);
});

// app.get('/names', (request, response) => {
//   response.send(`Hello ${request.query.name}`);
// });

app.get('/person/:firstName/:lastName', (request, response) => {
  response.send(`Hello ${request.params.firstName} ${request.params.lastName}`);
});

app.get('/names', (request, response) => {
  response.render('myNamesView', { name: 'John', lastName: 'Smith'});
});

app.listen(8000);