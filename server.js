const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/product-catalog-ui'));

app.get('/*', function (request, response) {
  response.sendFile(__dirname + '/dist/trip-planner-ui/index.html');
});

app.listen(process.env.PORT, 4200);
