// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var elements = [];

  //start with document body
  // if document body's classlist contains classname, push into array
  //then for each of its childnodes, call the recursive function again


  var element = document.body;

  function collectElements (element) {

  	if (element.classList && element.classList.contains(className)) {

  		elements.push(element);
  	}

  	if (element.childNodes) {

  		for (var i=0; i<element.childNodes.length; i++) {

  			collectElements(element.childNodes[i]);

  		}



  	}



  };

  collectElements(element);
  console.log(elements);

  return elements;


};
