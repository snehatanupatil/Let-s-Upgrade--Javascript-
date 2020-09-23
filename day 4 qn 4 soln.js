weapons.forEach(newfunc);
function newfunc(item,index){
    for(let check in item)
    {
        if(item.age<30 )
        console.log(item[check]);
    }
}
weapons.forEach(newfunccountry);
function newfunccountry(item,index){
    for(let check in item)
    {
        if(item.country=="india")
        console.log(item[check]);
    }
}