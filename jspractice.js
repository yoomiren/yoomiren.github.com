document.getElementById("submit").addEventListener("click", function()                                                                                                                                    
{
	var your_name = document.getElementById("your_name").value;
var greeting = document.getElementById ("greeting22");
if(your_name == "yoomi") {

greeting.innerHTML = "Sorry, my name is not yoomi";
greeting.style.color = "#c00";
} else if (your_name == "how are you") {

	greeting. innerHTML = "I am good.";
greeting.style.color ="pink";

} else if (your_name == "hi") {

	greeting. innerHTML = "hello";
greeting.style.color ="black";

} else if (your_name == "what's your name") {

	greeting. innerHTML = "yoomi";
greeting.style.color ="black";




} else if (your_name == "what do you like") {

	greeting. innerHTML = "i like you";
greeting.style.color ="black";


}

});