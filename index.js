// Question 3
let stuName = "Bolatito";
let school = "Greenfield High School";
let classGroup = "art";

// subjects for each class group
let science = ["Physics", " Chemistry", " Biology", " Technical Drawing"];
let socialScience = ["Accounting", " Commerce", " Marketing ", " Geogrphy"];
let arts = ["Government", " Economics", " Literature", " History"];
let general = [", English", " Mathematics"];

if (classGroup == "science"){
    console.log(
        stuName + " from " + school + " will be taking the subjects " + science + general + "."
    );
}
else if(classGroup == "social science"){
    console.log(
        stuName + " from " + school + " will be taking the subjects " + socialScience + general + "."
    );
}
else if(classGroup == "art"){
    console.log(
        stuName + " from " + school + " will be taking the subjects " + arts + general + "."
    );
}
else{
    console.log(
        stuName + " from " + school + " will only take " + general + "."
    );
}

// Question 5
function PowerOf2(num)
{
 
  // Calculate log2 of the num to get the smallest power of two to the number
  var power = Math.floor(Math.log2(num));
 
  // If 2^a is equal to N, return N
  if (Math.pow(2, power) === num) {
    return num;
  }
  else{
    // Return 2^(a + 1)
  return Math.pow(2, power + 1);
  }
}
 
// Main function
var number = 40;
   
console.log("The number " + PowerOf2(number) + " is the power of 2 nearest to " + number);
