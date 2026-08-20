// const numbers = [1, 2, 3, 4, 5];
//for eachn -> ejecuta una funcion por cada elemento del array
// numbers.forEach((number,index)=>{
//     console.log(number,index);
//     console.log(number*2)
// });

//MAP--> Ejecuta una funcion por cada elemento y retorna un arreglo resultante con la misma longitud

const ages = [15, 65, 45, 32, 12, 48,18]
// const result = ages.map(age, index => {
//     return age + (index * 4);
// });

const result = ages.filter((age) => {
     if(age>=18) {
        return age;
     }
});
console.log(result);

//FIND - retorna el primer elemento de un arreglo que cumpla una condiciòn

const resultAge = ages.find((age)=>{
    return age !=18;
})
console.log(resultAge)