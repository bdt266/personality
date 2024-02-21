document.getElementById("surveyForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  var Q1 = document.querySelector('input[name="Q1"]:checked').value;
  var Q2 = document.querySelector('input[name="Q2"]:checked').value;
  var Q3 = document.querySelector('input[name="Q3"]:checked').value;
  var Q4 = document.querySelector('input[name="Q4"]:checked').value;
  var Q5 = document.querySelector('input[name="Q5"]:checked').value;

  if (Q1 === "no" && Q2 === "yes" && Q3 === "sometimes" && Q4 === "no" && Q5 === "no") {
    // Navigate to the listings.html page
    window.location.href = "listings.html";
  } else {
    // Handle other cases or print other results here
    alert("Not a ghost");
  }
});
