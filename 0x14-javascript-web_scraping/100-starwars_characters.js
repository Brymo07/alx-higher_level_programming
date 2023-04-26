#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi.dev/api/films/${movieId}/`;

request.get(url, { json: true }, (error, response, data) => {
  if (error) {
    console.log(error);
    return;
  }

  const characters = data.characters;
  const characterNames = [];

  const getCharacterName = (url) => {
    return new Promise((resolve, reject) => {
      request.get(url, { json: true }, (error, response, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data.name);
        }
      });
    });
  };

  const promises = characters.map((character) => getCharacterName(character));
  Promise.all(promises)
    .then((names) => {
      console.log(names.join("\n"));
    })
    .catch((error) => {
      console.log(error);
    });
});
