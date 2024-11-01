const picture = document.getElementById("profilePicture");

function fetchData() {
  const username = document.getElementById("username").value;
  
  fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`User not found: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      picture.innerHTML = `<img src="${data.avatar_url}" alt="Profile Picture">`;

      document.getElementById("name").textContent = data.name || "null";
      document.getElementById("blog").innerHTML = data.blog || "null";
      document.getElementById("created").textContent = new Date(data.created_at).toLocaleDateString();
    })
    .catch(error => {
      console.error("Error fetching data", error);
    })
}

document.getElementById("fetchData").addEventListener("click", fetchData);