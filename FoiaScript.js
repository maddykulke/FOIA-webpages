
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