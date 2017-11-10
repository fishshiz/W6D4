const Router = require('./router');
const Inbox = require('./Inbox');

const Routes = class Routes{
  inbox: Inbox
}

document.addEventListener("DOMContentLoaded", function(event) {

  let sidebar = document.querySelector(".sidebar-nav");
  
  sidebar.addEventListener("click", function(e) {
    let newLocation = e.target.innerText.toLowerCase();
    window.location.hash = newLocation;
  });
  
  let addContentHere = document.querySelector('.content');
  let routeThings = new Router(addContentHere, Routes);
  
  routeThings.start();
  

});

