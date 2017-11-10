class Router{
  constructor(node, Routes){
    this.node = node;
    this.routes = Routes;
    this.render = this.render.bind(this);
    
  }
  
  start(){
    this.render();
    window.addEventListener("hashchange", this.render);
  }
  
  render(){
    this.node.innerHTML = "";
    let makeNew = this.activeRoute();
    let component = new makeNew;
    if(component === undefined) {
      this.node.innerHTML = "";
    } else {
      this.node.innerHTML = "";
      let newComp = component.render();
      this.node.appendChild(newComp);
    }

  }
  
  activeRoute(){
    let activeLocation = window.location.hash;
    return routes[activeLocation.slice(1)];
  }
}

module.exports = Router;