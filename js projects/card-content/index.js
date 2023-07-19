const posts = [
  {
    title: "this is title 1",
    body: "this is body1",
  },

  {
    title: "this is title 2",
    body: "this is body 2",
  },

  {
    title: "this is title 3",
    body: "this is body 4",
  },

  {
    title: "this is title 4",
    body: "this is body 4",
  },
  {
    title: "this is title 5",
    body: "this is body5",
  },

  {
    title: "this is title 6",
    body: "this is body 6",
  },

  {
    title: "this is title 7",
    body: "this is body 7",
  },

  {
    title: "this is title 8",
    body: "this is body 8",
  },

  /* <div class="post">
<h4 class="post-title">post title</h4>
<p class="post-body">post description 1</p>
</div> */

  //selection
];
const postsElement = document.querySelector(".posts");
const loadAllData = () => {
  
  
  // Below in each iteration every element from posts array is inserted to post variable
  //
    posts.map((post) => {
    // the following statement is telling a div is going to be created
    const postElement = document.createElement("div");
    // the following statement sets what kind of div will be created(through mentioning classname)
    postElement.classList.add("post");
    // this following statement tells what would be the contents
    postElement.innerHTML = `<h4 class="post-title">post title</h4>
    <p class="post-body">post description 1</p>`;

    postsElement.appendChild(postElement);
  });
};
loadAllData();
