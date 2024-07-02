const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const posts = require('./routes/posts');

const app = express();


// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   // res.send('Hi there. How are you? <h1>Hello</h1>');
//   // res.send(`<h1>Home</h1>`);
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//   // res.send('<h1>About</h1>');
//   res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });





app.listen(port, () => console.log(`Server is running on localhost:${port}`));