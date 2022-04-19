var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

function input_length() {
	return input.value.length;
}

function toggle() {
	this.classList.toggle('done');
}

   /*create input in placeholder and add to list */
function create_input() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
    
    /* create delete button and its function
     and add it to newly added listitem*/
    var btn = document.createElement("button");
		btn.appendChild(document.createTextNode( "Delete!"));
		li.appendChild(btn);
		btn.onclick = removeParent;

}
   /* allow toggle to cut across all list item*/
function my_full_toggle() {
    var list_items = document.querySelectorAll("li");
		for (var i = 0; i < list_items.length; i++) {
		 	list_items[i].addEventListener("click", toggle)
}
}
 /* function to add an item to list after click
 enter on the page*/
function add_after_click() {
	if ((input_length) != 0) {
		create_input();
		my_full_toggle();
		}
}
 /* function to add an item after pressing 
 enter on keyboard*/
function add_after_keypress(event) {
	if ((input_length) != 0 && event.which == 13) {
		create_input();
		my_full_toggle();
		
}
}

button.addEventListener("click", add_after_click); /* calling on button effect using addeventlistener*/
input.addEventListener("keypress", add_after_keypress); /*calling on keypress effect */

function listlength() {
	return listItems.length;
}

/* creating similar delete button and its purpose 
    on existing list items*/
function deleteButton() {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	listItems[i].appendChild(btn);
	btn.onclick = removeParent;
}
 /* iterating delete button on existing listitems*/
for (var i = 0; i < listlength(); i++) {
	deleteButton();
}
 /* a function to remove the delete button and its parent */
function removeParent(event) {
	event.target.parentNode.remove();

}
