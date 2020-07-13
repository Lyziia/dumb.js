var i = 0;
var txt = '...just what... ❤';
var speed = 300;

function typeWriter() {

  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
	console.log(i); //debug
    setTimeout(typeWriter, speed);
  }
  if (i == txt.length) {
  document.getElementById("title").innerHTML = "❤"; 
   
   i = 0;
   
  
  }
 
}
