document.getElementById("show_date").addEventListener("click", (ev) => {
	const date = new Date();
	document.getElementById("date_placeholder").innerHTML =
		`${date.getHours() < 12 ? date.getHours() : date.getHours() - 12}:${date.getMinutes()}:${date.getSeconds()} ${date.toLocaleDateString()}`;
});
let lamp = document.getElementById("lamp");
document.getElementById("on").addEventListener("click", (ev) => {
	lamp.src = "images/pic_bulbon.gif";
});
document.getElementById("off").addEventListener("click", (ev) => {
	lamp.src = "images/pic_bulboff.gif";
});
