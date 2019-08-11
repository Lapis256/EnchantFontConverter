function convert(){
	document.forms.form.output.value = "";
	let fonts = {
		before: "abcdefghijklmnopqrstuvwxyz".split(""),
		after: "".split("")
	}
	let after = [];
	let input = document.forms.form.input.value;
	let low = input.toLowerCase();
	let array = low.split("");
	for(let i = 0; i < array.length; i++){
		index = fonts.before.indexOf(array[i]);
		if(index === -1) after.push(array[i]);
		else after.push(array[i].replace(array[i], fonts.after[index]));
	}
	result = after.join("");
	document.forms.form.output.value = result;
}