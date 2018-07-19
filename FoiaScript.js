


function showAndHideDiv(id) {
/**adapted from W3 Schools toggle example
https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
**/

   var div = document.getElementById(id);

    if (window.getComputedStyle(div, null).getPropertyValue("display")!== "none") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";

    }
     
}

function showDiv(id) {

	var div = document.getElementById(id);

	div.style.display = "block";
}

function hideDiv(id){
	var div = document.getElementById(id);
	div.style.display = "none";

}


$(document).ready(function() {
    // $.getJSON("regions.json"), function(data) {
    
    $.getJSON( "regions.json")
    .done(function( data ) {
    console.log( "JSON Data: " + data["regions"]["Region1"]["Address"] );
  })
  .fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
    });
        // var regions, states = data.regions;
        // var states = data.states;
        // console.log(regions);
        // console.log(states);
        // var userRegion = states[input];
        // var regionAddress = regions[userRegion]["Address"];
        // var regionPhone = regions[userRegion]["Phone"];
        // var regionFax = regions[userRegion]["Fax"];
        // var regionEmail = regions[userRegion]["Email"];

        //     if ( $('#stateDropdown:not(:has(option))') ){
            
        //       $("#stateDropdown").click(function(){  
        //           $.each(states, function(key, value){         
        //               $("#stateDropdown").append($("<option></option>").attr(
        //                   "value", key).text(key));
        //                });
        //           });
        //     }

    // });
});


