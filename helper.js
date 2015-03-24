var messageEl 	= document.getElementById('message');
var textEl 		= document.getElementById('text');
var optionsEl 	= document.getElementById('options');
var submitEl 	= document.getElementById('submit');

function ask(message) {
	textEl.style.display = 'block';
	optionsEl.style.display = 'none';
	messageEl.innerHTML = message;
}

function choice(message) {
	textEl.style.display = 'none';
	optionsEl.style.display = 'block';
	messageEl.innerHTML = message;

	while(textEl.firstChild) {
	    textEl.removeChild(textEl.firstChild);
	}

	for(var i=1; i<arguments.length; i++) {
		var labelEl = document.createElement('label');
		var radioEl = document.createElement('input');
		var opt = document.createTextNode(arguments[i]);

		radioEl.type = 'radio';
		radioEl.name = 'choice';

		labelEl.appendChild(radioEl);
		labelEl.appendChild(opt);
		optionsEl.appendChild(labelEl);

	}
}

var iterator = chooseYourAdventure();

var text = document.getElementById('input');
document.getElementById('submit').addEventListener('click', function() {
	iterator.next(text.value);
});
iterator.next();