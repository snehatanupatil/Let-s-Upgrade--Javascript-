function changeimage(){
    const ele=document.getElementsByClassName("base");
    const newurl="https://i2-prod.mirror.co.uk/incoming/article5189893.ece/ALTERNATES/s1200/Fashion-designer-using-sewing-machine.jpg";
    ele[0].src=newurl;

}

function changeimageagain(){
    const eles=document.getElementsByClassName("base");

    eles[0].src= "https://th.bing.com/th/id/OIP.0yx87-PDh_8mZ6d5IDkbwQHaEK?w=290&h=180&c=7&o=5&pid=1.7";
}

function realimage(){
    const element=document.getElementsByClassName("base");
    const newurl="https://th.bing.com/th/id/OIP.ZocUPYXu2eWRNnL2HqRpaQHaE8?w=219&h=180&c=7&o=5&pid=1.7";
    element[0].src=newurl;

}