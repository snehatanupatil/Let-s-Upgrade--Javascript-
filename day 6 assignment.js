let array1=[
    {
         name:"sinchan",
         age:24,
          city:"bangalore",
          salary : 90000,
    },
    {
         name:"hary",
         age:40,
          city:"bangalore",
         salary:80000,

    },
    {
     name:"prince",
         age:18,
         city:"Mumbai",
        salary:30000,
    },
    {
        name:"diksha",
         age:21,
         city:"bangalore",
        salary:90000,
    },
    {
         name:"sinchan",
          age:12,
          city:"bangalore",
          salary:90000
    },

];

function display(superarray) {
    let tabledata = "";

    superarray.forEach(function (superhero, index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${superhero.name}</td>
      <td>${superhero.age}</td>
      <td>${superhero.city}</td>
      <td>${superhero.salary}</td>
      <td>
      <button onclick='deleteSuperhero(${index})'>delete</button>
      </td>
      </tr>`;

      tabledata += currentrow;
    });
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}

display(array1);

function searchByName() {
    let searchValue = document.getElementById("searchName").value;

    let newdata = array1.filter(function (array1) {
      return (

        array1.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
        //array1.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1

        );
    });

    display(newdata);
  }

  function deleteSuperhero(index) {
    array1.splice(index, 1);
    display(array1);
  } 