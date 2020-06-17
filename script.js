
//Adding my moment method here to show current date
console.log(moment());
let m = moment();
console.log(m.format("dddd , MMMM Do YYYY"));
let m2 = m.format("dddd , MMMM Do YYYY");


//Using JQUERY to append the current day to the HTML <p-tag>
$("#currentDay").text(m2);


//On click event for each save button
$(".saveBtn").click(function() {
    console.log("I work!");
});