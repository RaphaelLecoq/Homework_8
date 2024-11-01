const table = document.getElementById("table");

fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response not ok");
    }
    return response.json();
  })
  .then(data => {
    data.forEach(painting => {
      const row = document.createElement("tr");

      const name = document.createElement("td");
      name.textContent = painting.name;
      row.appendChild(name);

      const year = document.createElement("td");
      year.textContent = painting.year;
      row.appendChild(year);

      const artist = document.createElement("td");
      artist.textContent = painting.artist;
      row.appendChild(artist);

      table.appendChild(row);
    })
  })
  .catch(error => {
    console.error("Error fetching data", error);
  })