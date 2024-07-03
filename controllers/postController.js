let posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
  { id: 4, title: "Post 4" },
  { id: 5, title: "Post 5" },
  { id: 6, title: "Post 6" },
];

// @desc Get all posts
// @route GET /api/posts
export const getPosts = (req, res, next) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return (
      res
        .status(200)
        .json(posts.slice(0, limit))
    );
  }

  res
    .status(200)
    .json(posts);
  

};


// @desc Get single post
// @route GET /api/posts/:id
export const getPost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  
  if (!post) {
    const error = new Error(`Post with id ${id} not found!!!`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(post);
};


// @desc Create post
// @route POST /api/posts/:id
export const createPost = (req, res, next) => {
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
  }
  posts.push(newPost);
  res.status(201).json(posts);
};


// @desc Update post
// @route PUT /api/posts/:id
export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {

    const id = parseInt(req.params.id);
    // custom error
    const error = new Error(`Post with id ${id} not found.`);
    error.status = 404;
    return next(error);
  }

  post.title = req.body.title;
  res.status(200).json(posts);
};

// @desc Delete post
// @route DELETE /api/posts/:id
export const deletePost = (req, res, next) => {

  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const id = parseInt(req.params.id);
    // custom error
    const error = new Error(`Post with id ${id} not found.`);
    error.status = 404;
    return next(error);
  }
  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);

}