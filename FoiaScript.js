function showDiv(id) {
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
     



/**
    var hiddenDiv = document.getElementById("FoiaRequestLetter");
    hiddenDiv.style.display = "block";
    console.log(hiddenDiv.style)
    
  */  

    /*
    if (hiddenDiv.style.display === "none") {
    	console.log("display is none")
        hiddenDiv.style.display = "block-inline";
        console.log("display is now visible")

    } else {
        hiddenDiv.style.display = "none";
        console.log("else")
    }
    */ 
}