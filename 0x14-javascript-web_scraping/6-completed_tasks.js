#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request.get({ url, json: true }, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const tasksCompleted = {};
  for (const todo of body) {
    if (todo.completed) {
      tasksCompleted[todo.userId] = (tasksCompleted[todo.userId] || 0) + 1;
    }
  }
  console.log(tasksCompleted);
});
