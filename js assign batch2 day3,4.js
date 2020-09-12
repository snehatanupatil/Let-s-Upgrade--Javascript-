let arrObj = [
    {
    name:"anu", age: 19 , country: "India", hobbies: ["playing badminton","watching movies","Coding"]
    },
    {
    name:"pavi", age: 15 , country: "USA", hobbies: ["playing Baseball","listening musics","studying"]
    },
    {
    name:"gopi", age: 32 , country: "India", hobbies: ["dancing","reading books"," playing kabadi"]
    },
    {
    name:"tanu", age: 43 , country: "India", hobbies: ["dancing","listening music","cracking jokes"]
    }
    ];
    console.log("array objects are:");
    function displayall()
    {
      for( let i =0;i<arrObj.length;i++)
      {
      console.log(arrObj[i]);
      }
    }
    displayall()            //function calling


    console.log("object with age above 18 are displayed here");
    function displayabove18()
    {                       //display object whose member age is above 18
     for(let i=0;i<arrObj.length;i++)
     {
       if(arrObj[i].age >18)
       {
       console.log(arrObj[i]);
       }
     }
    }
    displayabove18();     //function calling


     
    console.log("here the object with country india are displayed");
    function countryInd()
    {                     //display objects whose member country is "India"
      for(let i=0;i<arrObj.length;i++) 
      {
        if(arrObj[i].country.search("India") == 0)
        {
        console.log(arrObj[i]);
        }
      }
    }
    countryInd()