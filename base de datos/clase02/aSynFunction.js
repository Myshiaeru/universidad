/*const promise = new promise ((resolve,reject)=>{
    let condition = true ;
    if(condition){
        resolve("la promesa se cumplio");

    }else{
        reject("la promesa no se cumplio");
    }
});*/

function multiplicar (a,b){
    return new Promise ((resolve , reject)=>{
        if (a==0|| b ==0){

            reject("the number must be differentfrom 0");
        }else{
            resolve(a*b);
        }
    });
}

function suma (a){
    return new Promise ((resolve , reject)=>{
        if (a<10){

            reject("the number must be differentfrom 0");
        }else{
            resolve(a+20);
        }
    });
}

function divide (value){
    return new Promise ((resolve , reject)=>{
        if (value>100){

            reject("the number must be differentfrom 100");
        }else{
            resolve(value/2);
        }
    });
}

async function asynfuntion(){
    try{
        const resultmultiplicar=await multiplicar(0,2);
        const resultsuma=await suma(resultmultiplicar);
        const resultdivide=await divide (resultsuma);
        console.log(resultdivide);
    }catch (error){
        console.log(error)
    }
};

asynfuntion()