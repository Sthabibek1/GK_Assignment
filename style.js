function dateFunction(){
	var date = new Date();
	console.log(date);
	var div= document.getElementById('date');
	div.innerHTML=date;
}
function myFunction(x) {
dateFunction();
}
document.addEventListener('DOMContentLoaded', myFunction);
