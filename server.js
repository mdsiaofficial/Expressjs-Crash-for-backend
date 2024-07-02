const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;

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
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
  { id: 4, title: "Post 4" },
  { id: 5, title: "Post 5" },
  { id: 6, title: "Post 6" },
];

// get all posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
})

// get a single post
app.get(`/api/posts/:id`, (req, res) => {
  // console.log(req.params);
  const id = parseInt(req.params.id);

  // way 1
  // const post = posts.find(post => post.id === id);
  // console.log(post);

  // way 2
  const post2 = posts.filter(post => post.id === id);
  console.log(post2);

  
  res.json(posts);
})

app.listen(port, () => console.log(`Server is running on localhost:${port}`));