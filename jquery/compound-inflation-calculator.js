function calculateInflation(){
  // Get user inputs
  var currentSalary = document.getElementById('currentSalary').value;
  var inflationRate = document.getElementById('inflationRate').value;
  var years = document.getElementById('years').value;
  
  // Validate user inputs
  if(currentSalary == '' || inflationRate == '' || years == ''){
     document.getElementById('result').innerHTML = "Error: Please fill in all 3 form fields.";
  } else {
    // Calculate inflation
    var totalInflation = Math.pow((1 + (inflationRate/100)), years);
    var dollarSalary = (currentSalary * 1).toLocaleString("en-US", {style: "currency", currency: "USD"});
    var newSalary = (currentSalary * totalInflation).toLocaleString("en-US", {style: "currency", currency: "USD"});
  
    // Display result
    var yearText = (years == 1) ? "year" : "years";
    document.getElementById('result').innerHTML = "With an inflation rate of " + inflationRate + "%, your " + dollarSalary + " salary needs to increase to " + newSalary + " in " + years + " " + yearText + " to maintain your purchasing power.";
  }
    
}