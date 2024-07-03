// const express = require('express');
import express from 'express';
import colors from 'colors';

const router = express.Router();

// posts array
let posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
  { id: 4, title: "Post 4" },
  { id: 5, title: "Post 5" },
  { id: 6, title: "Post 6" },
];


// get all posts
router.get('/', (req, res) => {
  // console.log(req.query); // query from link

  // limit show
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
    // return;
    
  }
  res.status(200).json(posts);
})

// get a single post
router.get(`/:id`, (req, res, next) => {
  // console.log(req.params);
  const id = parseInt(req.params.id);

  // way 1 : if the post doesn't exist find() method help most >>>
  const post = posts.find(post => post.id === id);
  console.log(post);

  // way 2
  // const post2 = posts.filter(post => post.id === id);
  // console.log(post2);

  // ERROR HANDLE FOR post does not exit: >>>
  if (!post) {
    // custom error
    const error = new Error(`Post with ID: ${id} not found`);
    error.status = 404;
    return next(error);
    // return res
    //   .status(404)
    //   .json({ message: `Post with ID: ${id} not found` });
    // return;
  }
  res.status(200).json(post);
  
  // res.status(200).json(post2);
});

// create a new post
router.post('/', (req, res, next) => {
  // console.log(req.body);
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  }
  if (!newPost.title) {
    const id = parseInt(req.params.id);
    // custom error
    const error = new Error(`Please include a title! for Post with ID: ${id}`);
    error.status = 400;
    return next(error);

    // return res.status(400).json({ message: "Please include a title!" });
  }
  posts.push(newPost);
  res.status(201).json(posts);
}); 


// update post
router.put(`/:id`, (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {

    const id = parseInt(req.params.id);
    // custom error
    const error = new Error(`Post with id ${id} not found.`);
    error.status = 404;
    return next(error);

    // return res
    //   .status(404)
    //   .json({ message: `Post with id ${id} not found.` });
  }

  post.title = req.body.title;
  res.status(200).json(posts);
});

// delete post
router.delete(`/:id`, (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {

    const id = parseInt(req.params.id);
    // custom error
    const error = new Error(`Post with id ${id} not found.`);
    error.status = 404;
    return next(error);

    // return res
    //   .status(404)
    //   .json({ message: `Post with id ${id} not found.` });
  }
  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
})

export default router;
// using common js modul || jodio jani na ki eida
// module.exports = router;