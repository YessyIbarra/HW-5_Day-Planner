
//Adding my moment method here to show current date
console.log(moment());
let m = moment();
console.log(m.format("dddd , MMMM Do YYYY"));
let m2 = m.format("dddd , MMMM Do YYYY");


//Using JQUERY to append the current day to the HTML <p-tag>
$("#currentDay").text(m2);


//Adding on-click event for each save button with a class of saveBtn
//I need to find a better way to save all text inputs to local storage for each hour
$(".saveBtn").click(function() {
    console.log("I work!");
    let eightAMinputValue = document.getElementById("8am");
    let eight = eightAMinputValue.value;
    console.log(eight);
    localStorage.setItem("8am", eight);
    
    //9am
    let nineAMinputValue = document.getElementById("9am");
    let nine = nineAMinputValue.value;
    console.log(nine);
    localStorage.setItem("9am", nine);

    //10AM
    let tenAMinputValue = document.getElementById("10am");
    let ten = tenAMinputValue.value;
    console.log(ten);
    localStorage.setItem("10am", ten);
    
    //11am
    let elevenAMinputValue = document.getElementById("11am");
    let eleven = elevenAMinputValue.value;
    console.log(eleven);
    localStorage.setItem("11am", eleven);
    
});


//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage



//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future

//WHEN I refresh the page
//THEN the saved events persist