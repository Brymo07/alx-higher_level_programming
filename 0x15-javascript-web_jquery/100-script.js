/*
JavaScript script that updates the text color of the
<header> element to red (#FF0000).
*/
document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
  document.querySelector("header").style.color = '#FF0000';
  }
}
