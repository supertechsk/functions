 function x(){
    console.log("x")

  };
  

  function y(x){
    console.log("y")
    //x();

  };
  y(x); // here y is higher order fun. and x is callback fun.
