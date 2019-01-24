document.onkeyup = function(e) {
  if(e.keyCode == 13) {
	  document.getElementById("start_").className = "normal"
	new TypeIt('#test', {
  	strings: ['Je suis Matteo Mervoyer.', 'J\'ai 19 ans et etudie a 42 a Paris.'],
  	speed: 50,
  	waitUntilVisible: true
}).go();
  }
}


