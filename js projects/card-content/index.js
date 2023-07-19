const fecthData = async (config) => {
  try {
    const res = await axios(config);
    return res.data;
  } catch (error) {
    throw Error("data is not fetched");
  }
};





// selection
const postsElement = document.querySelector(".posts");
//if not async function used , while data fetching from the source the execution shall move to the nexxt statement
// without fetching data and this would create error

//the await sequence will be maintained only inside a async function
const loadAllData = async () => {
  const posts = await fecthData("https://jsonplaceholder.typicode.com/posts");

  // Below in each iteration every element from posts array is inserted to post variable
  posts.map((post) => {
    // this following statement tells what would be the contents
    const postElement = document.createElement("div");

    // the following statement is telling a div is going to be created
    postElement.classList.add("post");
    // the following statement sets what kind of div will be created(through mentioning classname)

    postElement.innerHTML = `
           <h4 class="post-title">${post.title}</h4>
          <p class="post-body">${post.body}</p>
      `;
    postsElement.appendChild(postElement);
  });
};

loadAllData();
