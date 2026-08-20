// function SayHello(){
//     console.log("han pasado 10min");
// }
// setTimeout (()=>{
//     console.log("hello");
// },3000);

//sirve para avisar

function sumar (a,b,callback){
    let result = a+b;
    callback(result);
}

function restar (a,b,callback){
    let result = a-b;
    callback(result);
}

function multiplicar (a,b,callback){
    let result = a*b;
    callback(result);
}

