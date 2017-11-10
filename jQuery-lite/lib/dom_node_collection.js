

class DOMNodeCollection {
  
  constructor(elements) {
    this.elements = elements;
  }
  
  
  html(string) {
    if(string || string === "") {
      this.each(function(el){
        el.innerHTML = string;
      });
    } else {
      return this.elements[0].innerHTML;
    }
  } 
  
  empty(){
    this.each(function(el){
      $jl(el).html("");
    });
  }
  
  append(arg){
    // what's the outerHTML of the target el
    // add new
  }  
  
  each(callback) {
    for (let i = 0; i < this.elements.length; i++) {
      callback(this.elements[i]);
    }
    return;
  };
}
module.exports = DOMNodeCollection;

