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

    $("#medBtn").click(function() {
      $("#medBlock").show();
      $("#medCheck").hide();
      $("#medXmark").show();
      });

    $("#noMedBtn").click(function() {
      $("#medBlock").hide();
      $("#medCheck").show();
      $("#medXmark").hide();
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

    $("#SocialBtn").click(function() {
      $("#socialBlock").show();
      $("#socialCheck").hide();
      $("#socialXmark").show();
      });

    $("#noSocialBtn").click(function() {
      $("#socialBlock").hide();
      $("#socialCheck").show();
      $("#socialXmark").hide();
      });

    $("#mspBtn").click(function() {
      $("#mspBlock").show();
      $("#mspCheck").hide();
      $("#mspXmark").show();
      });

    $("#noMSPBtn").click(function() {
      $("#mspBlock").hide();
      $("#mspCheck").show();
      $("#mspXmark").hide();
      });

  $("#myOwnRecordsButton").click(function() {
      $("#myOwnRecords").show();
      $("#form-container").hide();
  });

  $("#notOwnRecordsButton").click(function() {
      $("#myOwnRecords").hide();
      $("#form-container").show();
  });



  $('#releaseEnd').click(function() {
    var startDate = new Date( $('#releaseStart').val() );
    if (startDate) {
      var endDate = new Date( $('#releaseEnd').val() );
      if (endDate < startDate) {
        alert("Timeframe end date must be on or after start date.");
      }
    }
  });

  $('input:radio[name="release_info"]').change(
    function(){
        if ($(this).val() == "timeframe_only") {
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
        if ($(this).val() == "expByEvent") {
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
            $("#expediteReason").prop('required',true);
          } else {
            $("#expediteBlock").hide();
            $("#expediteReason").prop('required',false);
          }
        }).change();

        $("#repSubmitter").change(function() {
            if ( $("#repSubmitter").is(":checked") ) {
              $("#repRole").show();
              $("#legal-role").prop('required',true);
              $("#roleProof").prop('required',true);
            } else {
              $("#repRole").hide();
              $("#legal-role").prop('required',false);
              $("#roleProof").prop('required',false);
            }
          }).change();

          $("#certifyRecords").change(function() {
              if ( $("#certifyRecords").is(":checked") ) {
                $("#certDetails").show();
                $("#caseJuris").prop('required',true);
                $("#caseNumber").prop('required',true);
                $("#caseName").prop('required',true);
              } else {
                $("#certDetails").hide();
                $("#caseJuris").prop('required',false);
                $("#caseNumber").prop('required',false);
                $("#caseName").prop('required',false);
              }
          }).change();

          $("#otherReq").change(function() {
              if ( $("#otherReq").is(":checked") ) {
                $("#reqType").show();
                $("#otherSpecifics").prop('required',true);
              } else {
                $("#reqType").hide();
                $("#otherSpecifics").prop('required',false);
              }
          }).change();

          function validate() {
          var $result = $("#result");
          var email = $("#email").val();
          $result.text("");

          if (validateEmail(email)) {
            $result.text(email + " is valid :)");
            $result.css("color", "green");
          } else {
            $result.text(email + " is not valid :(");
            $result.css("color", "red");
          }
          return false;
          }

          $("#validate").bind("click", validate);

});


// $.getJSON("regions.json", function(json) {
// 	console.log(json); // show the JSON file content into console
// });


// $(document).ready(function() {
//     // $.getJSON("regions.json"), function(data) {
//
//     $.getJSON( "regions.json").done(function( data ) {
//     console.log( typeof data["regions"] );
//   }).fail(function( jqxhr, textStatus, error ) {
//       var err = textStatus + ", " + error;
//       console.log( "Request Failed: " + err );
//     });
//         var regions, states = data.regions;
//         var states = data.states;
//         console.log("regions");
//         console.log("states");
//         var userRegion = states[input];
//         var regionAddress = regions[userRegion]["Address"];
//         var regionPhone = regions[userRegion]["Phone"];
//         var regionFax = regions[userRegion]["Fax"];
//         var regionEmail = regions[userRegion]["Email"];
//
//             if ( $('#stateDropdown:not(:has(option))') ){
//
//               $("#stateDropdown").click(function(){
//                   $.each(states, function(key, value){
//                       $("#stateDropdown").append($("<option></option>").attr(
//                           "value", key).text(key));
//                        });
//                   });
//             }

//     });
// });




// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}
