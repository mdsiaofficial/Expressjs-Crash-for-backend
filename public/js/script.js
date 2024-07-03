
const output = document.querySelector(`#output`);
const btn = document.querySelector(`#get-posts-btn`);
const form = document.querySelector(`#add-post-form`);

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

    posts.forEach((post) => {
      const postEle = document.createElement('div');
      postEle.textContent = `${post.id}  ________  ${post.title}`;
      output.appendChild(postEle);
    });
  } catch (error) {
    console.log(`Error fetching posts`, error);
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
    console.log('Error adding post', error);
    
  }
}

// event listener
btn.addEventListener(`click`, showPosts);
form.addEventListener('click', addPost);