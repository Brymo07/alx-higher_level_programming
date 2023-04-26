const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request.get(url, (error, response, body) => {
  if (error) {
    console.log(`Error: ${error}`);
    return;
  }

  const { statusCode } = response;

  if (statusCode !== 200) {
    console.log(`Error: Request failed with status code ${statusCode}`);
    return;
  }

  fs.writeFile(filePath, body, 'utf-8', (error) => {
    if (error) {
      console.log(`Error: ${error}`);
      return;
    }

    console.log(`The contents of ${url} have been saved to ${filePath}.`);
  });
});
