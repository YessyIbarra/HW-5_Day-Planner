
//Adding my moment method here to show current date
console.log(moment());
let m = moment();
console.log(m.format("dddd , MMMM Do YYYY"));
let m2 = m.format("dddd , MMMM Do YYYY");


//Using JQUERY to append the current day to the HTML <p-tag>
$("#currentDay").text(m2);

//If any text is in local storage the below code will grab it
//and append the text to the text area
let t0 = localStorage.getItem("8am");
$("#8am").text(t0);

let t1 = localStorage.getItem("9am");
$("#9am").text(t1);

let t2 = localStorage.getItem("10am");
$("#10am").text(t2);

let t3 = localStorage.getItem("11am");
$("#11am").text(t3);

let t4 = localStorage.getItem("12pm");
$("#12pm").text(t4);

let t5 = localStorage.getItem("1pm");
$("#1pm").text(t5);

let t6 = localStorage.getItem("2pm");
$("#2pm").text(t6);

let t7 = localStorage.getItem("3pm");
$("#3pm").text(t7);

let t8 = localStorage.getItem("4pm");
$("#4pm").text(t8);

let t9 = localStorage.getItem("5pm");
$("#5pm").text(t9);


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

    //12pm
    let twelvePMinputValue = document.getElementById("12pm");
    let twelve = twelvePMinputValue.value;
    console.log(twelve);
    localStorage.setItem("12pm", twelve);

     //1pm
     let onePMinputValue = document.getElementById("1pm");
     let one = onePMinputValue.value;
     console.log(one);
     localStorage.setItem("1pm", one);

     //2pm
     let twoPMinputValue = document.getElementById("2pm");
     let two = twoPMinputValue.value;
     console.log(two);
     localStorage.setItem("2pm", two);

     //3pm
     let threePMinputValue = document.getElementById("3pm");
     let three = threePMinputValue.value;
     console.log(three);
     localStorage.setItem("3pm", three);

     //4pm
     let fourPMinputValue = document.getElementById("4pm");
     let four = fourPMinputValue.value;
     console.log(four);
     localStorage.setItem("4pm", four);

     //5pm
     let fivePMinputValue = document.getElementById("5pm");
     let five = fivePMinputValue.value;
     console.log(five);
     localStorage.setItem("5pm", five);
    
});

let currentHour = moment().hours();
console.log(currentHour);

if (currentHour === 23){
    $("#8am").css("background-color", "red")
}




//THEN each timeblock is color coded to indicate whether it is in the past, present, or future

