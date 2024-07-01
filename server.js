const express = require('express');
const path = require('path');
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

let posts = [
  {id:1, title: "Post 1"},
  {id:2, title: "Post 2"},
  {id:3, title: "Post 3"},
  {id:4, title: "Post 4"},
  {id:5, title: "Post 5"},
  {id:6, title: "Post 6"},
]
app.get('/api/posts', (req, res) => {
  res.json(posts);
})
app.listen(8000, () => console.log(`Server is running on localhost:8000`));