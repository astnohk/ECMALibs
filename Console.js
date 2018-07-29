// The code written in BSD/KNF indent style
"use strict";

class Console {
	constructor()
	{
		this.screen = document.createElement("textarea");
		this.screen.disabled = true;
		this.lines = [];
		this.lineMax = 100;
	}

	getElement()
	{
		return this.screen;
	}

	write(text)
	{
		this.lines.push(text);
		if (this.lines.length > this.lineMax) {
			this.lines.shift();
		}
		let display = "";
		for (let l = 0; l < this.lines.length; l++) {
			display = display + this.lines[this.lines.length - 1 - l] + "\n";
		}
		this.screen.innerHTML = display;
	}
}

