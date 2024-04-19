## functions
- There are different functions in javascript
  1. Anonymous Function
  2. Named Function
  3. Arrow Functions
  4. Callback Function
<hr>

### function Statement 
- is a simple function statement

      function n() {
        }
  
### Function Expression 
- when we assign a variable to a Function it forms a function expression

      var a = function() {
        }
  
&rarr; in function statement we can call it even before assigning it but in function expression it is treated as a variable and cant be called before assignment

    // function statememt 
    s();
    function s(){
        console.log("Samuel")
     }
    
    // function expression 
    ();
    var createCounter = 
    function(n){
        console.log("Samuel")
    }
    // function expression cant be called before it is assigned 

<hr>

### 1. Anonymous functions

- Functions Without a name
- They dont have own indentity and this leads to syntax error

    function (){
      }
- Are most used where functions are used as variables or values

### 2. Named functions

- when we a assign function with a name to a variable

      var b = function s(){

      }
  - when calling this function we cant call them as s() it will result to Reference error
        
        var b = function s(){
            console.log("samuel")
        }
        
        b();
        // ();

### 3. First class functions

- is the ability of functions to be used as values and can be passed to other functions as arguments and they can also be returned as functions returned from other functions

      function n(pr){
          console.log(pr)
      }
      n(function(){
      
      }
      );
  
### 4. Callback functions
- when we take a function and pass it to another function

        setTimeout(function (){
          console.log("timer")
      }, 5000);
      
      function x(y){
          console.log("x");
          y();
      }
      x(function y(){
          //y is the call backfunctiion
          console.log("y")
      });
