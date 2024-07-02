// const express = require('express');
import express from 'express';
// const path = require('path');
import path from 'path';
// const posts = require('./routes/posts');
import posts from './routes/posts.js';

const port = process.env.PORT || 8000;

const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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



// Routes
app.use('/api/posts', posts)

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`)
});