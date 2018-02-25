// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

  if (json[0]==='[') {

  	var newArray = [];

  	if (json.length > 2) {
  		var indices = [];
		
		for(var i=0; i<json.length;i++) {
    		if (json[i] === '"') {
    			indices.push(i);
    		}
		}


		for (var t=0; t<indices.length; t+=2) {

			var element = json.slice(indices[t]+1, indices[t+1]);
			newArray.push(element);
		}
  	}
  	
  	return newArray;
  	
  } else if (json[0]==='{') {

  	var newObject = {};

  	if (json.length > 2) {

  		//find index of ;
	  	//slice from beginning to that, and from after that to end-1 or comma
	  	//set newObject[key] to end

	  	var indicesCommas = [];

	  	for(var i=0; i<json.length;i++) {
    		if (json[i] === ',') {
    			indicesCommas.push(i);
    		}
		}

	  	var parseObj = function(string) {

	  		var colonLocation = string.indexOf(':');
	  		var key = json.slice(2, colonLocation-1);
	  	
		  	if (json[colonLocation+3]==='"') {

		  		newObject[key]="";

		  	} else {

		  		var value = json.slice(colonLocation+3);
		  		var endquotes = value.indexOf('"');
		  		value = value.slice(0, endquotes);
		  		newObject[key] = value;

		  	}

	  	}





	  
  	}
  	

  	return newObject;


  }





};
