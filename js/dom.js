/*global console*/

/*Task 1

Access HTML element with id tag-line.
Access all headings that belong to div with the class name bg-main-content.
Create the variable collect and assign it with content of tag-line.
Loop through the array of headings and append the content of each heading to variable collect
After the loop, use alert to print collect*/

var tag = document.getElementById("tag-line");
//console.log(tag);

var headings = document.querySelectorAll(".bg-main-content h2");
//console.log(headings);

var collect =  "A Web Designer’s Site Launch Checklist" + "\n------------------------------\n"; 
//console.log(collect);

for (var i = 0; i < headings.length; i++) {
    collect += headings[i].innerHTML + "\n";
}

alert(collect);

/*Task 2

Access 13th div with class name box that belongs to div with the class name bg-main-content. 
You can name the variable when_to_launch.
Use property children to "scoop" in array all HTML elements that belong to that div.
Create the variable collect and assign it with content of heading that belongs to gotten array.
Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.
After the loop, use alert to print collect*/

var when_to_launch = document.querySelectorAll(".bg-main-content .box");
//console.log(when_to_launch)

var scoop = when_to_launch[12].children
//console.log(scoop);

var collect =  "When To Launch" + "\n------------------------------\n";

for (var i = 1; i < scoop.length; i++) {
    collect += scoop[i].innerHTML + "\n";
}

alert(collect);


