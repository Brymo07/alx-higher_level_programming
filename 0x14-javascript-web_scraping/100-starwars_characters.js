#!/usr/bin/node

const request = require('request');

const movieID = process.argv[2];
const url = `https://swapi.dev/api/films/${movieID}/`;

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);
  const characters = data.characters;
  characters.forEach((character) => {
    request.get(character, (error, response, body) => {
      if (error) {
        console.log(error);
        return;
      }

      const characterData = JSON.parse(body);
      console.log(characterData.name);
    });
  });
});
