function buttonwork()
{
    console.log("Button clicked");
    const val = document.getElementById("box");
    const hold=val.value;
    console.log(hold);

    const but2= document.getElementById("box2");
    but2.value= hold;

}