const DOMNodeCollection = require('./dom_node_collection');

function $jl(selector){
  let elements;

  if (selector instanceof HTMLElement){
    elements = [selector];
  } else {
    elements = Array.from(document.querySelectorAll(`${selector}`));
  }

  const dom = new DOMNodeCollection(elements);
  
  return dom;
}






window.$jl = $jl;
