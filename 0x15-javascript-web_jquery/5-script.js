/*
JavaScript script that adds a <li> element to a
list when the user clicks on the tag DIV#add_item.
*/
$(document).ready(function () {
	$("DIV#add_item").click(function () {
		$("<li>").text("Item").appendTo("ul.my_list");
	});
});
