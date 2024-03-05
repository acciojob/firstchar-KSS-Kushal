function firstChar(text) {
  // your code here
	if (text.length===0) {
		return "";
	}
	const myText = text.trim();
	return myText[0];
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
