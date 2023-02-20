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
let num = 4;
let  
