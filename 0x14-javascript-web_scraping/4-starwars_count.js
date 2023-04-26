#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const characterId = '18';
let count = 0;

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  let data;
  try {
    data = JSON.parse(body);
  } catch (error) {
    console.log('Error parsing JSON data:', error);
    return;
  }

  for (const film of data.results) {
    for (const character of film.characters) {
      if (character.includes(characterId)) {
        count++;
      }
    }
  }
  
  console.log(count);
});
