var saveB = document.querySelector("#hello");

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));


var currentHour = (new Date()).getHours();
$('.edit_cont')
  .each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour + 24){
      $(this).css('background-color','Gray');
    }else if(val < currentHour && val > currentHour-24){
      $(this).css('background-color','Red');
    }else if(val === currentHour){
      $(this).css('background-color','Green');
    }else{
      $(this).css('background-color','White');
    }
  });


  saveB.addEventListener("click", function(event) {
    event.preventDefault();
  
    var text = document.querySelector("#ten").value;
   
  
    // if (text === "") {
    //   displayMessage("error", "text area cannot be blank");
    // } else {
    //   displayMessage("success", "Saved successfully");
  
    // TODO: Save email and password to localStorage and render the last registered user
    localStorage.setItem("text", text);
  }
  );

  // $(document).ready(function() {
  //   const saveB = document.querySelector('saveBtn');
  //   saveB.addEventListener("click", function(event) {
  //   event.preventDefault();
  //   var textInput = {
  //      text: text.value.trim(),
  //   }});
  // });0
     
  //     localStorage.setItem("textArea", JSON.stringify(textArea));
  //saveB.addEventListener("click", function(event) {
   // event.preventDefault();
   //var textInput = {
     // text: text.value.trim()
   // };
    
    //localStorage.setItem("textInput", JSON.stringify(textInput));
    



/*  .each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour + 6){
      $(this).css('background-color','Blue');
    }else if(val < currentHour && val > currentHour-6){
      $(this).css('background-color','Red');
    }else if(val === currentHour){
      $(this).css('background-color','Green');
    }else{
      $(this).css('background-color','White');
    }
  });


/*Function for updating the hour colors gray is past, red is now, green is future 
- Grab current hour with moment js moment().hours() military time? Var currentTime
- Loop will go through alll time blocks, run a conditional statement to compare current hour to each time block 
- Var that stores block hour grab by the time blocks id in html military time? (Parse string to integer) 
- If/else if 
    - If(time block < current hour) {
        - Add past class grey
    - Else if time block === current hour  {
    - Remove class past and add present 
    - Else {remove past, present
        - Add future */