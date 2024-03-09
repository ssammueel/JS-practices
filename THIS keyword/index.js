//this keyword in global object

console.log(this)

//this keyword inside a function

function x(){
    a  = 10
    console.log(this)


}
x() //behaves differently based on strict or non strict
window.x();

//this keyword inside arrow function

const c= () =>{
    console.log(this)
}
c()

// this in objec

const obj = {
    a:10,
    c : function(){
        // console.log(this)
    }
    
}
obj.c()

// this in a arrow function inside function in obj 

const obj2 = {
    a:200,
    b: function(){
        // console.log(this.a)
        const k =()=>{
            console.log(this.a)
        }
        k()
    }
}
obj2.b()
//this keyword inside and html attribute
