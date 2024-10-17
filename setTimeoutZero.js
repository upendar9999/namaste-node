console.log("Hello Wolrd");

var a = 1078698;
var b = 20986;

//This callback will only be pushed to call stack in v8 once it is empty
setTimeout(()=>{
    console.log("call me ASAP");
},0); 

function multiplyFn(x,y){
    const result = a * b;
    return result;
}

var c = multiplyFn(a,b);

console.log("Mutliplication result is:", c);