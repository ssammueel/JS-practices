## functions
- There are different functions in javascript
  1. Anonymous Function
  2. Named Function
  3. Arrow Functions
  4. Callback Function

### function Statement 
- is a simple function statement

      function n() {
        }
  
### Function Expression 
- when we assign a variable to a Function it forms a function expression

      var a = finction() {
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

