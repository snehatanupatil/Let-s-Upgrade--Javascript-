//qn1.program to search for a particular character in a string

let str = "Hello World";
let str1 = str.charAt(6) ;
console.log(str1);

output:W




//qn2.program to convert minutes to seconds

function convertMinutestoSeconds(minutes)
{
  return Math.floor(minutes * 60);
}
let minutesToSeconds = convertMinutestoSeconds(2);
console.log(minutesToSeconds);

output:120



//qn3.program to search for a elementnin  an array of strings

let array=["arc", "mar", "car"];
let num=prompt("enter element to search","<name goes here>");
let i=0;
for(i=0;i<array.length;i++){
  if(array[i]==num){
    console.log("found" +num);
  }
}
  
output:enter element to search 
       car found
       


//qn4.program to display only elements cotaining 'a' in them from an array

let x=prompt("enter size");
let a = new Array();
for(i=0;i<x;i++)
{
  a[i]=prompt("enter the string");
}
for(i=0;i<x;i++){
  for(let j=0;j<a[i].length;j++){
    if(a[i][j]=='a'){
      console.log(a[i]);
    }
  }
}

output:enter size
       3
       enter the string
       net
       Pack
       tall
It display:Pack
           tall



//qn5. print an array in reverse order

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let array1 = array.reverse();
console.log(array1);

output:[7, 6, 5, 4, 3, 2, 1, 0]


