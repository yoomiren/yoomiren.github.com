document.getElementById("submit").addEventListener("click", function()                                                                                                                                    
{
var your_name = document.getElementById("your_name").value;
var fav_color = document.getElementById("fav_color").value;
var greeting = document.getElementById("greeting2").value;
if(your_name.toLowerCase()=="yoomi") {
	var greeting_1 = "<strong>my name is yoomi too </strong>";
} else if (your_name == "coco") {
	var greeting_1 = "my friend's name is coco";
} else {
	var greeting_1 = "hi" + your_name + "!";

}

if (fav_color.toLowerCase() == "pink") {
	var greeting_2 ="<strong>my favorite color is pink too!</strong>";
} else if (fav_color == "red") {
	var greeting_2 = "I don't like red";
} else {
	var greeting_2 = "got it!" ;
}

greeting.innerHTML = greeting_1 + "<br />" + greeting_2;

});