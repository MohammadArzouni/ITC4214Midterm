$(document).ready(function() {
  // Array to store the TV shows inputted by the user
  var tvShows = [];

  // Function to add the TV show to the list
  function addTVShow(name, genre) {
    tvShows.push({ name: name, genre: genre });
    createTableRow(name, genre);
  }
