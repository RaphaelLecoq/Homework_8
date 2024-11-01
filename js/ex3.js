let countries = [];

function addCountry() {
  const country = document.getElementById("country").value;
  const year = parseInt(document.getElementById("year").value, 10);

  if (country && year) {
    countries.push({name: country, year: year});
  } else {
    console.error("Input error");
  }
  document.getElementById("country").value = "";
  document.getElementById("year").value = "";
}

function sendData() {
  const userName = document.getElementById("name");

  if (!userName) {
    console.error("Please enter a name and one country");
    return;
  }

  const data = {
    name: userName.value,
    countries: countries
  }

  fetch("https://thejsway-server.herokuapp.com/api/countries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response not ok");
      }
      return response.text();
    })
    .then(data => {
      console.log("Response: ", data);
    })
    .catch(error => {
      console.error("Error sending data: ", error);
    })
}
