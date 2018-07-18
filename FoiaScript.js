


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


$(document).ready(function(input) {
    $.getJSON("http://github.com/maddykulke/FOIA-webpages/blob/master/regions.json", function(data) {
        var regions, states = Object.values(data);
        console.log(regions);
        console.log(states);
        var userRegion = states[input];
        var regionAddress = regions[userRegion]["Address"];
        var regionPhone = regions[userRegion]["Phone"];
        var regionFax = regions[userRegion]["Fax"];
        var regionEmail = regions[userRegion]["Email"];

        var stateList = Object.keys(states);
        console.log(stateList.join(" "));
        $("stateDropdown").select(stateList);

            if ( $('#stateDropdown:not(:has(option))') ){
            
              $("#stateDropdown").click(function(){  
                  $.each(states, function(key, value){         
                      $("#stateDropdown").append($("<option></option>").attr(
                          "value", key).text(key));
                       });
                  });
            }

    });
});


