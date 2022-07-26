// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

//! 1
function bmi(weight, height) {
  const indexBMI = weight / (height ** 2);
  
  if (indexBMI <= 18.5) {
    return "Underweight";
  } else if (indexBMI > 18.5 && indexBMI <= 25) {
    return "Normal";
  } else if (indexBMI > 25 && indexBMI <= 30) {
    return "Overweight";
  } 
  return "Obese";  
}