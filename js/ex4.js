function displayFormData() {
  const form = document.getElementById("form");
  const formData = new FormData(form);

  const dataTable = document.getElementById("table");

  dataTable.innerHTML = `
    <tr>
      <th>Key</th>
      <th>Value</th>
    </tr>
  `;

  for (const [key, value] of formData.entries()) {
    const row = dataTable.insertRow();
    const cellKey = row.insertCell(0);
    const cellValue = row.insertCell(1);

    cellKey.textContent = key;
    cellValue.textContent = value;
  }
}

function cancel() {
  document.getElementById("form").reset();
  const dataTable = document.getElementById("table");
  dataTable.innerHTML = `
    <tr>
      <th>Key</th>
      <th>Value</th>
    </tr>
  `;
}