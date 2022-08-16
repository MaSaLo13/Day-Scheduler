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


  function saveText() {
  
    var nine = document.querySelector("#nine").value;
    var ten = document.querySelector("#ten").value;
    var eleven = document.querySelector("#eleven").value;
    var twelve = document.querySelector("#twelve").value;
    var one = document.querySelector("#one").value;
    var two = document.querySelector("#two").value;
    var three = document.querySelector("#three").value;
    var four = document.querySelector("#four").value;
    var five = document.querySelector("#five").value;
   
  
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
    // renderLastInput();
  };

  $('#row9 .textArea').val(localStorage.getItem ('9 AM'));
  $('#row10 .textArea').val(localStorage.getItem ('10 AM'));
  $('#row11 .textArea').val(localStorage.getItem ('11 AM'));
  $('#row12 .textArea').val(localStorage.getItem ('12 PM'));
  $('#row1 .textArea').val(localStorage.getItem ('1 PM'));
  $('#row2 .textArea').val(localStorage.getItem ('2 PM'));
  $('#row3 .textArea').val(localStorage.getItem ('3 PM'));
  $('#row4 .textArea').val(localStorage.getItem ('4 PM'));
  $('#row5 .textArea').val(localStorage.getItem ('5 PM'));


  $('.saveBtn').on('click', saveText);