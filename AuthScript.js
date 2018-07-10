
var states = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT'];


function autocomplete(inp, arr) {
/** adapted from w3 schools autocomplete example
https://www.w3schools.com/howto/howto_js_autocomplete.asp
**/ 
  
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  /*execute a function when someone clicks in the document:*/
  inp.addEventListener("click", function(e) {
    closeAllLists(e.target);
  });
  inp.addEventListener("keyup", function(e) {
    e.preventDefault
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
      }
    }
  } 
}





function showDiv(divID) {
    var hiddenDiv = document.getElementById(divID);
    event.stopPropagation();
    if ( window.getComputedStyle(x, null).getPropertyValue("display") === 'none') {
        hiddenDiv.style.display = 'block-inline';
    } else {


        hiddenDiv.style.display = 'none';
    }
}


function limitCurrentDates(dateArray) {
  // Adapted from https://stackoverflow.com/questions/32378590/set-date-input-fields-max-date-to-today
    var today = new Date().toISOString().split("T")[0];
    for (var i = 0, dateLen = dateArray.length; i < dateLen; i++) {
      document.getElementById(dateArray[i]).setAttribute("max", today);
    }
}



function limitFuturedate(dateArray) {
  // Adapted from https://stackoverflow.com/questions/32378590/set-date-input-fields-max-date-to-today
    var today = new Date().toISOString().split("T")[0];
    for (var i = 0, dateLen = dateArray.length; i < dateLen; i++) {
      document.getElementById(dateArray[i]).setAttribute("min", today);
    }
}



function customMessage(id, message){

  id.addEventListener("input", function (event) {
  if (id.validity.patternMismatch) {
    id.setCustomValidity(message);
  } else {
    id.setCustomValidity("");
  }
});
}


function oneBoxMin(){
 var chkd = document.authform.individualRequest.checked || document.authform.litigationRequest.checked||document.authform.otherRequestType.checked

 if (chkd == true){

 } else {
    alert ("Please select an option for purpose of request.")
 }

}


function acceptTerms(){
  if(document.getElementById('agreeHIPAA').checked) { 
    // return true; 

  } else { 
    alert('Please indicate that you have read and agree to the authorization terms.')
  }

}



// function dynamicAdd(){
//     // Attribution: Dynamically adding duplicate (unique ID) form Div elements using javascript on 
//     // jsfiddle.net -  https://jsfiddle.net/phusick/Rceua/

//     var button = document.getElementById("newRecip");
    
//     button.addEventListener("click", function() {
//     var sourceNode = document.getElementById("recipInfo");
//     var node = duplicateNode(sourceNode, ["id", "name", "placeholder"]);
        
//     sourceNode.parentNode.parentNode.appendChild(node);
//     }, false);
    
//     var counter = 0;
//     function duplicateNode(/*DOMNode*/sourceNode, /*Array*/attributesToBump) {
//         counter++;
//         var out = sourceNode.cloneNode(true);
//         if (out.hasAttribute("id")) { 
//           out["id"] = bump(out["id"]); 
//         }

//         var nodes = out.getElementsByTagName("*");
        
//         for (var i = 0, len1 = nodes.length; i < len1; i++) {
//             var node = nodes[i];
//             for (var j = 0, len2 = attributesToBump.length; j < len2; j++) {
//                 var attribute = attributesToBump[j];
//                 if (node.hasAttribute(attribute)) {
//                     node[attribute] = bump(node[attribute]);
//                 }
//             }
//         }
        
//         function bump(str) {
//             return str + " " + counter;
//         }
      
        
//         var rem = document.createElement("input");
//         rem.type = "button";
//         rem.name = "removeRecip" + str(counter);
//         rem.value = "Remove Recipient";
//         rem.addEventListener("click", removeDiv(), false);
//         out.appendChild(rem);

//         function removeDiv(){
//             this.parentNode.parentNode.remove();
//         }

//         return out;
//     }

    
// }


function dynamicAdd(){
    
    var button = document.getElementById("newRecip");
    
    button.addEventListener("click", function() {
        var sourceNode = document.getElementById("recipInfo");
        var node = duplicateNode(sourceNode, ["id", "name", "placeholder"]);
        
        sourceNode.parentNode.appendChild(node);
    }, false);

    
    var counter = 0;
    function duplicateNode(/*DOMNode*/sourceNode, /*Arra y*/attributesToBump) {
        counter++;
        var out = sourceNode.cloneNode(true);
        if (out.hasAttribute("id")) { out["id"] = bump(out["id"]); }
        var nodes = out.getElementsByTagName("*");
        
        for (var i = 0, len1 = nodes.length; i < len1; i++) {
            var node = nodes[i];
            for (var j = 0, len2 = attributesToBump.length; j < len2; j++) {
                var attribute = attributesToBump[j];
                if (node.hasAttribute(attribute)) {
                    node[attribute] = bump(node[attribute]);
                }
            }
        }
        
        function bump(/*String*/str) {
            return str + " " + counter;
        }
      
        return out;
    }

};







