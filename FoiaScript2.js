//button functionality 

$("#noCardBtn").click(function() {
  $("#noCard").show();
  $("#checkGreen").hide();
  $("#EnrolledXmark").show()
  });
$("#hasCardBtn").click(function() {
  $("#noCard").hide();
  $("#checkGreen").show();
  $("#EnrolledXmark").hide()
  });

$("#hasIDBtn").click(function() {
  $("#noID").hide();
  $("#IDcheckGreen").show();
  $("#IDXmark").hide();
  });

$("#noIDBtn").click(function() {
  $("#noID").show();
  $("#IDcheckGreen").hide();
  $("#IDXmark").show();
  });

$("#hasAdvantageBtn").click(function() {
  $("#hasAdvantage").show();
  $("#medAdvCheck").hide()
  // $("#dest1").hide()
  $("#medAdvXmark").show()
  });
$("#noAdvantageBtn").click(function() {
  $("#hasAdvantage").hide();
  $("#medAdvCheck").show()
  // $("#dest1").show()
  $("#medAdvXmark").hide()
  });

$("#hasMedicaidBtn").click(function() {
  $("#hasMedicaid").show();
  // $("#dest2").hide();
  $("#medicaidCheck").hide()
  $("#medicaidXmark").show()
  });
$("#noMedicaidBtn").click(function() {
  $("#hasMedicaid").hide();
  // $("#dest2").show();
  $("#medicaidCheck").show()
  $("#medicaidXmark").hide()
  });

//duplicate div
function dupDiv()
{
    str=document.getElementById('check').innerHTML;
    document.getElementById('IDcheckGreen').innerHTML;
    document.getElementById('dest1').innerHTML=str;
    document.getElementById('dest2').innerHTML=str;
}

// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

$(function() {
    $("#recaptcha_response_field").attr('required','required');
});
