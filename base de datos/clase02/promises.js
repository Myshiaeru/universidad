//es aquella que cumple la con la respuesta o no la cumple "pendiente , exitoso , fallido"

const promise = new promise ((resolve,reject)=>{
    let condition = true ;
    if(condition){
        resolve("la promesa se cumplio");

    }else{
        reject("la promesa no se cumplio");
    }
});

function multiplicar (a,b){
    return new promise ((resolve , reject)=>{
        if (a==0|| b ==0){

            reject("the number must be differentfrom 0");
        }else{
            resolve(a*b);
        }
    });
}

function suma (a){
    return new promise ((resolve , reject)=>{
        if (a<10){

            reject("the number must be differentfrom 0");
        }else{
            resolve(a+20);
        }
    });
}

function divide (value){
    return new promise ((resolve , reject)=>{
        if (value>100){

            reject("the number must be differentfrom 100");
        }else{
            resolve(value/2);
        }
    });
}

multiplicar(6,2)
.then (suma)
.then (divide)
.then((result)=>{
    console.log(result);

}).catch((error)=>{
    console.log(error);
});