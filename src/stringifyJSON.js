// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (typeof(obj)==="number" || typeof(obj)==="boolean" || typeof(obj)==="undefined"  || obj===null) {
  	var stringVersion = String(obj);
  	return stringVersion;
  }

  if (typeof(obj)==="string") {
 	return '"'+obj+'"';
  } 

 
 if (Array.isArray(obj)) {
  var results = [];
  for (var i=0; i<obj.length; i++) {
     results.push(stringifyJSON(obj[i]));
  }
  return '['+results.join(',')+']';

  /*
 	if (obj.length > 0) {
 		/*
 		 return '['+_.reduce(obj, function(accumulator, item) {
 		 	if (obj.length >1) {
 		 		return accumulator+','+stringifyJSON(item);

 		 	}
 		 	else {
 		 		return stringifyJSON(accumulator);
 		 	}
 		 })+']';
 		 
		
 		 

 		 var newString = '[';
 		 for (var i=0; i<obj.length; i++) {
 		 	newString+=stringifyJSON(obj[i]);
 		 	if (obj.length > 1 && i != obj.length-1) {


 		 		newString+=",";
 		 	}
 		 }
 		 newString += ']';
 		 return newString;
	


 	}
 	else {
 		return '[]';
 	}
  */

 }

if (typeof (obj)==="object") {

  var results = [];

  for (var key in obj) {
    //'a': 'apple'
    if (obj[key]===undefined || typeof(obj[key])==='function') {
      continue;
    }

    results.push(stringifyJSON(key)+":"+stringifyJSON(obj[key]));
  }

  return '{'+results.join(',')+'}';

  /*



 	if (isEmpty(obj)) {
 		return '{}';



 	}


 	else  {

 		var newString = '{';

 		for (var key in obj) {

 			if (obj[key]!== undefined && typeof(obj[key]) !=='function' ) {
 				
				newString += stringifyJSON(key) + ':' ;
	 			newString += stringifyJSON(obj[key]);

	 			if (Object.keys(obj).length > 1) {
	 				newString += ',';
	 			}


 			}

	 		

 		}
 		
 		if (newString[newString.length-1]===",") {
 			newString = newString.slice(0, newString.length-1);
 		}

 		newString += '}';
 		return newString;






 	}


*/
 	

 }

};

/*
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
*/
