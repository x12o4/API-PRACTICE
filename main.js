const apiURL = "https://api.wheretheiss.at/v1/satellites/25544";
document.getElementById("get-iss-location").addEventListener("click", () => {
  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      const latitude = data.latitude.toFixed(4);
      const longitude = data.longitude.toFixed(4);
      document.getElementById("iss-location").innerHTML = `
        <p><strong>Latitude:</strong> ${latitude}</p>
        <p><strong>Longitude:</strong> ${longitude}</p>
      `;
    })
    .catch(error => {
      console.error("Error fetching ISS location:", error);
      document.getElementById("iss-location").innerText = "Could not fetch ISS location.";
    });
});