let person = [];
let salaries = [1,2,3,4,5,6];


let addSalary = document.getElementById("addSalary")
let displayResult = document.getElementById("displayResult");
let displaySalary = document.getElementById("displaySalary");

addSalary.addEventListener("click", add_Salary);
displayResult.addEventListener("click", display_Result);
displaySalary.addEventListener("click", display_Salary);


function add_Salary(){
    alert("hello");
}

function display_Result(){
    alert("display Result");

}

function display_Salary(){
    let total = 0;
    for(let i = 0; i < salaries.length +1; i++){
     total += i;

        
    }
    alert(total/salaries.length);
    alert("test");


}