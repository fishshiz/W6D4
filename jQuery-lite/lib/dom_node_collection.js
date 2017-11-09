class DOMNodeCollection {
  
  constructor(elements) {
    this.elements = elements;
  }
  
  
  html(string) {
    this.elements.forEach(function(el){
      if(string) {
        el.innerHTML = string;
      } else {
        return el.innerHTML;
      }
    });
  } 
  
  empty(){
    this.elements.forEach(function(el){
      console.log(el);
      $jl(el).html("");
      console.log(el);
    });
  }
  
  
}
module.exports = DOMNodeCollection;