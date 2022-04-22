var css = document.querySelector("h3");
var cs = document.getElementById("cs");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var first_color = document.getElementById("c1");
var second_color = document.getElementById("c2");
var text1 = first_color.getAttribute("value");
var text2 = second_color.getAttribute("value");
var button = document.getElementById("btn1");
var btn = document.getElementById("btn2");
var input_1 = document.getElementById("initial_1");
var input_2 = document.getElementById("initial_2");
var random = document.getElementById("rd");
/* functions to get the length of inputs */
function input_1_length() {
	return input_1.value.length;
}

function input_2_length() {
	return input_2.value.length;
}

/*function set_gradient to set the gradient value to 
any color selected by color1 and color2
inputs */

function set_gradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";
/*setting the content of h3 with id=css to new
body.style.background*/
    css.textContent = body.style.background + ";";

}

/* taking the page load background-colors and
assigning them to variable cs*/
	cs.innerHTML = "linear-gradient(to right, " 
	+ text1
	+ ", "
	+ text2
	+ ")";

color1.addEventListener("input", set_gradient)
color2.addEventListener("input", set_gradient)
function add_after_keypress_for_color_1(event) {
	if (input_1_length() > 0 && event.which == 13) {
		first_color.setAttribute("value", input_1.value);
		body.style.background = 
	"linear-gradient(to right, " 
	+ input_1.value
	+ ", "
	+ color2.value
	+ ")";


		input_1.value = "";
	/*	cs.innerHTML = "linear-gradient(to right, " 
	+ input_1.value
	+ ", "
	+ text2
	+ ")";
*/
	}


}
function add_after_click_color_1() {
	if (input_1_length() > 0) {
		first_color.setAttribute("value", input_1.value);
		body.style.background = 
	"linear-gradient(to right, " 
	+ input_1.value
	+ ", "
	+ color2.value
	+ ")";


		input_1.value = "";
	/*	cs.innerHTML = "linear-gradient(to right, " 
	+ input_1.value
	+ ", "
	+ text2
	+ ")";
	*/
}
}
input_1.addEventListener("keypress", add_after_keypress_for_color_1)
button.addEventListener("click", add_after_click_color_1)
/* setting the color 2 to inputed color after pressing enter */
function add_after_keypress_color_2(event) {
	if (input_2_length() > 0 && event.which == 13) {
		second_color.setAttribute("value", input_2.value);
		body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", "
	+ input_2.value
	+ ")";

		input_2.value = "";

	/*	cs.innerHTML = "linear-gradient(to right, " 
	+ text1
	+ ", "
	+ input_2.value
	+ ")";
	*/
	}

}
/* setting the color to an inputed color after clicking enter */
function add_after_click_color_2() {
	if (input_2_length() > 0) {
		second_color.setAttribute("value", input_2.value);
		body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", "
	+ input_2.value
	+ ")";

		input_2.value = "";

	/*	cs.innerHTML = "linear-gradient(to right, " 
	+ text1
	+ ", "
	+ input_2.value
	+ ")";
	*/
	}
}

input_2.addEventListener("keypress", add_after_keypress_color_2)
btn.addEventListener("click", add_after_click_color_2)

/*we can comment the add eventlistener out and include 
our set_gradient function automatically 
in our html fine by setting the function to our input*/

/* creating a button called randomise 
which generate random color
 on click */
var random_button = document.createElement("button");
	random_button.appendChild(document.createTextNode("Randomize!"));
	random.appendChild(random_button);
	random.onclick = generate_random;

/* function to generate a random background color of style 
   linear gradient*/
	function generate_random() {
		var ran_1 = Math.floor(Math.random() * 1000000);
		var ran_2 = Math.floor(Math.random() * 1000000);
		ran_1 = "#" + ran_1;
		ran_2 = "#" + ran_2;
		first_color.setAttribute("value", ran_1); /*set value to random color 1 */
		second_color.setAttribute("value", ran_2); /* set value to random color 2*/
		/* assign the newly generated random colors to page background */
		body.style.background = 
	"linear-gradient(to right, " 
	+ ran_1
	+ ", "
	+ ran_2
	+ ")";

	}
	
