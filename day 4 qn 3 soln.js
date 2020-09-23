let weapons= [
    { 
       name:"sinchan",
       age:9,
       country:"japan",
       hobbies:[" playing ","dancing"],
   },

   {
    name:"hima",
    age:31,
    country:"india",
    hobbies:[" potpanting","gardening"],
   },
];



weapons.forEach(myFunction);

function myFunction(item, index) {
 for (let key in item) {
   console.log(item[key])
 }
}
