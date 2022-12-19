// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
	
	return array.reduce(function(acc, curr){
	
	  return acc.concat(curr)
	
	})
  }

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test){
  for(let i = 0; i < array.length; i++){
    if(test(array[i]) !== true){
      return false;
    }
  }
  return true;
  
  }

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string){
  //create arrays t ostore ltr and rtl
let ltr = [];
let rtl = [];
for(let i = 0; i < string.length; i++){
let script = characterScript(string.charCodeAt(i));
if( script !== null){
  if(script.direction === 'ltr'){
    ltr.push(script);
  }else if (script.direction === 'rtl'){
    rtl.push(script);
  }
}
}
if (ltr.length > rtl.length){
  return 'ltr'
}else {
  return 'rtl'

}
};






// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
