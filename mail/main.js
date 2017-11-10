const Router = require('./router');

document.addEventListener("DOMContentLoaded", function(event) {

  let sidebar = document.querySelector(".sidebar-nav");
  
  sidebar.addEventListener("click", function(e) {
    let newLocation = e.target.innerText.toLowerCase();
    window.location.hash = newLocation;
  });
  
  let addContentHere = document.querySelector('.content');
  let routeThings = new Router(addContentHere);
  
  routeThings.start();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});