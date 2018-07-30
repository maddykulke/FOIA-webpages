//button functionality
jQuery(document).ready(function() {
  $("#noCardBtn").click(function() {
    $("#noCard").show();
    $("#checkGreen").hide();
    $("#EnrolledXmark").show();
    });

  $("#hasCardBtn").click(function() {
    $("#noCard").hide();
    $("#checkGreen").show();
    $("#EnrolledXmark").hide();
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
    $("#medAdvCheck").hide();
    $("#medAdvXmark").show();
    });
  $("#noAdvantageBtn").click(function() {
    $("#hasAdvantage").hide();
    $("#medAdvCheck").show();
    $("#medAdvXmark").hide();
    });

  $("#hasMedicaidBtn").click(function() {
    $("#hasMedicaid").show();
    $("#medicaidCheck").hide();
    $("#medicaidXmark").show();
    });

  $("#noMedicaidBtn").click(function() {
    $("#hasMedicaid").hide();
    $("#medicaidCheck").show();
    $("#medicaidXmark").hide();
    });

  $("#myOwnRecordsButton").click(function() {
      $("#myOwnRecords").show();
      $("#form-container").hide();
  });

  $("#notOwnRecordsButton").click(function() {
      $("#myOwnRecords").hide();
      $("#form-container").show();
  });


  $('#TimeframeEnd').click(function() {
    var startDate = new Date( $('#TimeframeStart').val() );
    if (startDate) {
      var endDate = new Date( $('#TimeframeEnd').val() );
      if (endDate < startDate) {
        alert("Timeframe end date must be on or after start date.");
      }
    }
  });

  $('input:radio[name="release_info"]').change(
    function(){
        if ($(this).val() == 'timeframe_only') {
            // $("#timeframeBlock").show();
            $("#releaseStart").prop('required',true);
            $("#releaseEnd").prop('required',true);

        } else {
            // $("#timeframeBlock").hide();
            $("#releaseStart").prop('required',false);
            $("#releaseEnd").prop('required',false);
        }
    });

    $('input:radio[name="expiration_type"]').change(
      function(){
        if ($(this).val() == 'expByEvent') {
            // $("#expDateBlock").hide();
            // $("#expEventBlock").show();
            $("#expirationDate").prop('required',false);
            $("#exp_event").prop('required',true);
        } else if ($(this).val() == 'expByDate') {
              // $("#expDateBlock").show();
              // $("#expEventBlock").hide();
              $("#expirationDate").prop('required',true);
              $("#exp_event").prop('required',false);
          } else {
              // $("#expDateBlock").hide();
              // $("#expEventBlock").hide();
              $("#expirationDate").prop('required',false);
              $("#exp_event").prop('required',false);
          }
      }).change();

      $("#beneState").change(function(){
        if ($("#beneState").val() == 'NY') {
          $("#NYExceptionBlock").show();
          $('input:radio[name="NYRecords"]').prop('required',true);
        } else {
          $("#NYExceptionBlock").hide();
          $('input:radio[name="NYRecords"]').prop('required',false);
      }
    }).change();

    $("#feeWaiver").change(function() {
        if ( $("#feeWaiver").is(":checked") ) {
          $("#feeBlock").show();
          $("#waiverDetails").prop('required',true);
        } else {
          $("#feeBlock").hide();
          $("#waiverDetails").prop('required',false);
        }
      }).change();

      $("#expedited").change(function() {
          if ( $("#expedited").is(":checked") ) {
            $("#expediteBlock").show();
            $("#expediteDetails").prop('required',true);
          } else {
            $("#expediteBlock").hide();
            $("#expediteDetails").prop('required',false);
          }
        }).change();

});

//duplicate div
// function dupDiv()
// {
//     str=document.getElementById('check').innerHTML;
//     document.getElementById('IDcheckGreen').innerHTML;
//     document.getElementById('dest1').innerHTML=str;
//     document.getElementById('dest2').innerHTML=str;
// }

// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}
