// const express = require('express');
import express from 'express';
import logger from './middleware/logger.js';
// const path = require('path');
import path from 'path';
import { fileURLToPath } from 'url';
// const posts = require('./routes/posts');
import posts from './routes/posts.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
import colors from 'colors';

const port = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// console.log(__dirname);
// console.log(__filename)

const app = express();

// logger middleware
app.use(logger);


// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// setup static folder
app.use(express.static(path.join(__dirname, 'public')));

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
app.use('/api/posts', posts);

// 
app.use((req, res, next) => {
  const error = new Error(`Not Found`);
  error.status = 404;
  next(error);
});


// error handler
app.use(errorHandler);
app.use(notFound);

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`)
});