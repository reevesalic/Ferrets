function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
 
function myFunction(){
  alert("Thank you for submitting a question. We will respond soon!!");
}

function validate() {
  var name = validateForm(),
      thank = myFunction();
  return name && thank;
}




