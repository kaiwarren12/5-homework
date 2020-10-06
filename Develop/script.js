var plannerTableEL = $("#plannerTable");

// Save funciton should be saved here
console.log(plannerTableEL)
$(plannerTableEL).on("click", function(event){
    console.log(event.target);
    console.log(this.hasClass("saveBtn"));
})
/*
1) change color based on time
    - When the page loads (moment.js) 
    - for loop to transition through the elements on the page 
    - store elements on the page in an array 

2) save function to local storage 
    -When a btn is clicked, the text area will be saved to Local Storage
    - Array to store the text - then save that to local storage. 

3) moment.js for current day at the top of the daily schedule 

*/ 