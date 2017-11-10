class Router{
  constructor(node){
    this.node = node;
    this.render = this.render.bind(this);
  }
  
  start(){
    this.render();
    window.addEventListener("hashchange", this.render);
  }
  
  render(){
    this.node.innerHTML = "";
    let content = this.activeRoute();
    let newNode = document.createElement('p');
    newNode.innerHTML = content;
    this.node.appendChild(newNode);
  }
  
  activeRoute(){
    let activeLocation = window.location.hash;
    return activeLocation.slice(1);
  }
}

module.exports = Router;