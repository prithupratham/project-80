name_of_name_array=[];
function submit(){
    var display_name_array=[];
    for(var j=1;j<=4;j++){
        var name_student=document.getElementById("name_of_the_name_array"+j).value;
        console.log(name_student);
        name_of_name_array.push(name_student);
    }
console.log(name_of_name_array);
var length_of_student=name_of_name_array.length;
console.log(length_of_name);

for(var k=0;k<length_of_student;k++){
    display_name_array.push("<h4>Name-" + name_of_name_array[k] + "</h4>");
    console.log(display_name_array);    
}
console.log(display_name_array);




document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
name_of_name_array.sort();
console.log(name_of_name_array);
var display_name_array.sorting= [];

var length_of_name = name_of_student_array.length;
console.log(length_of_name);

for(var k=0;k<length_of_name;k++){
    display_name_array_sorting.push("<h4>Name-" + name_of_student_array[k] + "</h4>");
    console.log(display_name_array_sorting);    
}

}
