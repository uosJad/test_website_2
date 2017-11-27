
document.getElementById("numberButton").addEventListener("click", increaseButtonNumber);
document.getElementById("resetButton").addEventListener("click", resetButtonNumber);

function increaseButtonNumber(){
  var count = document.getElementById("numberButtonCount").innerHTML;
  if (count == ""){
    count = "0";
    //document.getElementById("numberButton").innerHTML = document.getElementById("numberButton").innerHTML + "aaa";
  }
  console.log(parseInt(count,10));
  count = parseInt(count,10) + 1;
  document.getElementById("numberButtonCount").innerHTML = count;

}

function resetButtonNumber() {
  document.getElementById("numberButtonCount").innerHTML = "";
  console.log("reset number");



}
