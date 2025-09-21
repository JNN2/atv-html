// Verifica login
if (!localStorage.getItem("logado")) {
  alert("Você precisa fazer login!");
  window.location.href = "login.html";
}

const postsEl = document.getElementById("posts");
const btnPost = document.getElementById("btnPost");
const postContent = document.getElementById("postContent");

function renderPosts() {
  const posts = JSON.parse(localStorage.getItem("posts") || "[]");
  postsEl.innerHTML = "";
  posts.forEach(p => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `<strong>${p.autor}</strong><br>${p.texto}`;
    postsEl.appendChild(div);
  });
}

btnPost.addEventListener("click", () => {
  const texto = postContent.value.trim();
  if (!texto) return;
  const posts = JSON.parse(localStorage.getItem("posts") || "[]");
  posts.unshift({ autor: localStorage.getItem("logado"), texto });
  localStorage.setItem("posts", JSON.stringify(posts));
  postContent.value = "";
  renderPosts();
});

renderPosts();
