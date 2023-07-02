$(document).ready(function() {
  // Array to store the TV shows inputted by the user
  var tvShows = [];

  // Function to add the TV show to the list
  function addTVShow(name, genre) {
    tvShows.push({ name: name, genre: genre });
    createTableRow(name, genre);
  }
  
  // Function to create a new table row
  function createTableRow(name, genre) {
    var newRow = '<tr><td>' + name + '</td><td>' + genre + '</td><td><button class="delete-btn">Delete</button></td></tr>';
    $('#show-list tbody').append(newRow);
  }
  
  // The event that will occur when the Add button is clicked
  $('#add-form').submit(function(event) {
    event.preventDefault();
    var name = $('#show-name').val();
    var genre = $('#show-genre').val();
    addTVShow(name, genre);
    $('#show-name').val('');
    $('#show-genre').val('');
  });

  // Function to delete a TV show from the list by splicing the array and removing the entry
  function deleteTVShow(index) {
    tvShows.splice(index, 1);
    $('#show-list tbody tr').eq(index).remove();
  }

   // The event that will occur when the Delete button is clicked
  $('#show-list').on('click', '.delete-btn', function() {
    var index = $(this).closest('tr').index();
    deleteTVShow(index);
  });

  // Function to update the table with the current TV show data
  function updateTable() {
    $('#show-list tbody').empty();
    for (var i = 0; i < tvShows.length; i++) {
      createTableRow(tvShows[i].name, tvShows[i].genre);
    }
  }

  // Function to sort the table by a chosen column in alphabetical order
  function sortTable(column) {
    tvShows.sort(function(a, b) {
      var valueA = a[column];
      var valueB = b[column];
      return valueA.localeCompare(valueB);
    });
    updateTable();
  }

  // The event that will occur when the Sort button is clicked
  $('#show-list').on('click', '.sort-btn', function() {
    var column = $(this).data('column');
    sortTable(column);
  });

});
