/* Temp express setup */

import express from 'express';
import path from 'path';
const app = express();

/* Access public dir w/o react-router */

app.use(express.static(path.join(__dirname, 'public'), {
  dotfiles: 'ignore',
  index: false
}));

app.get('*', function(req, res, next) {
  console.log('Request: [GET]', req.originalUrl)
  res.sendFile(path.resolve(__dirname, 'index.html'));
});


/* Error Handling */

app.use(function(req, res, next) {
  console.log('404')
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.sendStatus(err.status || 500);
});


/* Start Server */

const port = 3000;
app.listen(port);

console.log('Serving: localhost:' + port);
