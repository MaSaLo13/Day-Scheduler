var saveB = document.querySelector("#hello");
var text = document.querySelector("#ten");

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


  function renderLastInput() {
    // TODO: Retrieve the last email and password and render it to the page
    var ten = localStorage.getItem("10 AM");
    // var password = localStorage.getItem("password");
  
   /* if (!email || !password) {
      return;
    }*/
  
    text.textContent = ten;
    // userPasswordSpan.textContent = password;
    
  }

  saveB.addEventListener("click", function(event) {
    event.preventDefault();
  
    var nine = document.querySelector("#nine").value;
    var ten = document.querySelector("#ten").value;
    var eleven = document.querySelector("#eleven").value;
    var twelve = document.querySelector("#twelve").value;
    var one = document.querySelector("#one").value;
    var two = document.querySelector("#two").value;
    var three = document.querySelector("#three").value;
    var four = document.querySelector("#four").value;
    var five = document.querySelector("#five").value;
   
  
    // if (text === "") {
    //   displayMessage("error", "text area cannot be blank");
    // } else {
    //   displayMessage("success", "Saved successfully");
  
    // TODO: Save email and password to localStorage and render the last registered user
    localStorage.setItem("9 AM", nine);
    localStorage.setItem("10 AM", ten);
    localStorage.setItem("11 AM", eleven);
    localStorage.setItem("12 PM", twelve);
    localStorage.setItem("1 PM", one);
    localStorage.setItem("2 PM", two);
    localStorage.setItem("3 PM", three);
    localStorage.setItem("4 PM", four);
    localStorage.setItem("5 PM", five);
    renderLastInput();
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