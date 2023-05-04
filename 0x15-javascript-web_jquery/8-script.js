/*
JavaScript script that fetches the character name from this
URL: https://swapi-api.hbtn.io/api/people/5/?format=json.
*/
$(function () {
  $.get('https://swapi-api.hbtn.io/api/films/?format=json', function (films) {
    $.each(films.results, function (index, film) {
      const li = $('<li></li>').text(film.title);
      $('UL#list_movies').append(li);
    });
  });
});
