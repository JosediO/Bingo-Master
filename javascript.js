let Lastsorted;
let Table = [null,null,null];
function Play(){
    Sorted();
    
    setInterval(Sorted,2000);
}

function  Sorted(){
    Lastsorted = Math.floor(Math.random() * 10 + 1)
    console.log(Lastsorted);
        Table.unshift(Lastsorted);
    Show();
}


function Show(){
    document.getElementById("slot1").value = Table[0];
    document.getElementById("slot2").value = Table[1];
    document.getElementById("slot3").value = Table[2]; 
}