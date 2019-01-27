const mymap = L.map('mapid').setView([53.9015, 27.5575], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1Ijoiem0xdHJ5IiwiYSI6ImNqcmRwa2c3eTBrZWk0OXBvdnNlZGZqbHAifQ.4--wklrVhxA5gT6y4QM5RQ',
}).addTo(mymap);

L.marker([53.9015, 27.5575]).addTo(mymap).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();
