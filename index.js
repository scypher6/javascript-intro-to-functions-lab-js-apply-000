function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  let str = string.toUpperCase()
  return console.log(str);
}

function logWhisper(string) {
  let str = string.toLowerCase()
  return console.log(str)
}

<<<<<<< HEAD
function sayHiToGrandma(string) {
  let str = "";
	if (string.toLowerCase() === string){
	    str = "I can\'t hear you!";
	} else if (string.toUpperCase() === string){
	    str = "YES INDEED!";
	} else if (string === "I love you, Grandma.")
	    str = "I love you, too.";
=======
function sayHitoGrandma(string) {
  let str = "";
	if (string.toLowerCase() === string){
	    str = "I can\'t hear you!"
	} 
>>>>>>> 8a635d57b5b2105703e45cdb61eeabb84601a343
	    return str;
}