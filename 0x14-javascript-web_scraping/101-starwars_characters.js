#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi.dev/api/films/${movieId}/`;

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);
  const characters = data.characters;
  const promises = characters.map(character => {
    return new Promise((resolve, reject) => {
      request.get(character, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          const characterData = JSON.parse(body);
          resolve(characterData.name);
        }
      });
    });
  });

  Promise.all(promises)
    .then(names => {
      names.forEach(name => {
        console.log(name);
      });
    })
    .catch(error => {
      console.log(error);
    });
});
