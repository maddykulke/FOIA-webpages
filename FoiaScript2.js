//button functionality 

$("#noCardBtn").click(function() {
  $("#noCard").show();
  $("#check").hide();
  });
$("#hasCardBtn").click(function() {
  $("#noCard").hide();
  $("#check").show();
  });
$("#hasAdvantageBtn").click(function() {
  $("#hasAdvantage").show();
  $("#dest1").hide()
  });
$("#noAdvantageBtn").click(function() {
  $("#hasAdvantage").hide();
  $("#dest1").show()
  });
$("#hasMedicaidBtn").click(function() {
  $("#hasMedicaid").show();
  $("#dest2").hide();
  });
$("#noMedicaidBtn").click(function() {
  $("#hasMedicaid").hide();
  $("#dest2").show();
  });

//duplicate div
function dupDiv()
{
    str=document.getElementById('check').innerHTML;
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
