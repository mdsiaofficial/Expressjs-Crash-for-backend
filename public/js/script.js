
const output = document.querySelector(`#output`);
const btn = document.querySelector(`#get-posts-btn`);
const form = document.querySelector(`#add-post-form`);

function renderPosts(posts) {
  try {
    posts.forEach((post) => {
      const postEle = document.createElement('div');
      postEle.textContent = `${post.id}  ________  ${post.title}`;
      output.appendChild(postEle);
    });
  } catch (error) {
    console.log(`Error rendering posts`, error);
  }
}

// get and show posts
async function showPosts() {

  try {

    const res = await fetch('http://localhost:8080/api/posts');
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await res.json();

    output.innerHTML = " ";
    const postTableTitle = document.createElement('div');
    postTableTitle.textContent = `ID~~~~~~~Post Title`;
    output.appendChild(postTableTitle);

    const bar = document.createElement('div');
    bar.textContent = `---------------------`;
    output.appendChild(bar);

    renderPosts(posts);

  } catch (error) {
    console.error(`Error fetching posts: ${error.message}`);
    output.innerHTML = `<div class="error">Failed to load posts. Please try again later.</div>`;
  }
};

// add new post
async function addPost(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const title = formData.get('title');

  try {
    const res = await fetch('http://localhost:8080/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title }),
    });
    
    if (!res.ok) {
      throw new Error("Failed to add post");
    }
    
    const newPost = await res.json();

    const postEle = document.createElement('div');
    postEle.textContent = `${newPost.id}  ________  ${newPost.title}`;
    output.appendChild(postEle);
    showPosts();
  } catch (error) {
    console.error(`Error fetching posts: ${error.message}`);
    output.innerHTML = `<div class="error">Failed to load posts. Please try again later.</div>`;
    
  }
}

// event listener
btn.addEventListener(`click`, showPosts);
form.addEventListener('click', addPost);