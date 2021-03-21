const app = require('express')();

app.get('/', (req, res) => {
  res.setHeader('set-cookie', ['httponly=1; httponly']);
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/path1', (req, res) => {
  res.send(req.headers.cookie);
});

app.get('/path2', (req, res) => {
  res.send(req.headers.cookie);
});

app.listen(8080, () => console.log('Server is listening on port 8080'));