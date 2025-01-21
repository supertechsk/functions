// functions
function addition(a,b){
  return a+b;
}
const res = addition(5,4);
console.log(res);

//arrow function 
function () => {
  console.log("This is arrow function"} 
}
//anonymous function
const wname = function (){
  console.log("This is anonymous function ");
}
// first class function 
const fclassfunction = function () {
  console.log("this is first class function");
}
// callback function 
function b(){
  console.log("this is a Sample function")
}
function callback(){
  console.log("this is callback function");
}
  
const res = callback(b);
console.log(res);
// map function
const arr = [1,2,3,5];
function double(){
  return arr * 2 ;
}
const newarr = map(double);
console.log(newarr);
