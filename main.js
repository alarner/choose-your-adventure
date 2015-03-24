function* chooseYourAdventure() {
	var answer;

	answer = yield ask('This is a prompt');
	console.log(answer);

	answer = yield ask('This is another prompt');
	console.log(answer);

	answer = yield choice('Which path will you choose?', 'Path A', 'Path B', 'Path C');
	console.log(answer);
}