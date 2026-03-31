/** string, number , boolean, array , object, tuple,void, never 
 *  type keyword
 *  any , unknown
 *  
*/


// const a:string = "hello world" ✅
// const a:string = 123 ❌



// const a:number = 123; ✅  // a is a constant variable which contain number data type
// const a:number = "hello"; ❌




// const a:boolean = true ✅
// const b:boolean = 123 ❌
// console.log(a)



//array -in array fixed datatype but length is not fix 
// const a:Array<number> =  [1,2,3]
// const b:number[] = [12,34,56]
// const c:string[] = [1,2,34] ❌
// console.log(a)
// console.log(b)
// console.log(c)
// a.push(12)
// a.push("world")❌
// console.log(a)










//tuple - fixed datatype with fixed length
// TypeScript tuple sirf compile-time pe fixed hota hai, runtime pe wo normal array hota hai — isliye .push() kaam karta hai.
// const a:readonly [number,number,string] = [1,2,"sourav"]
// a.push(12)
// console.log(a)













//void : e function kaam kar raha hai kuch return nahi kar raha hai, that's why void
// function greet(name:string) :void{
//   console.log(`hello ${name}`)
// }

// greet("sourav")




/** i return  a string */
// function greet(name:string):string{
//   return `hello ${name}`
//   // retunr 123❌
// }

// greet("sourav")





//never : usage of infinte loops,  jab function kavi khatam nahi hoga, tab hum never ko use karte hai
// function greet(name:string):never{
//   throw new Error("somethingw went wrong");
  
// }

// greet("sourav")







//type keyword

// type USER = {name:string,age:number,isMale:boolean}
// const user: USER = {
//   name:"test",
//   age:34,
//   isMale:true
// }



// function greet(data:USER):void{
//   console.log(`hello ${data.name} your age is ${data.age}`)
// }

// greet(user)







//any means you can put any data type in a variable

// let a:any 
// a = "hello";
// a = 123
// console.log(a.toUpperCase())



// unknown mein aap koi vi data type use kar sakte ho in that variable. but before use the varialbe  you have to check
// b/w any and unknown always use unkown(recomded)
let a:unknown

a = 123;
// a = "sourav"


if(typeof a ==="string") 
  console.log(a.toUpperCase())