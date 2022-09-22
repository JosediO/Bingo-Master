let Lastsorted;
let Table = [null,null,null,null];
function Play(){
    Sorted();
    
    
}

function  Sorted(){
    Lastsorted = Math.floor(Math.random() * 10 + 1)
    console.log(Lastsorted);
       if(!Table.includes(Lastsorted)){
        Table.unshift(Lastsorted);
        document.getElementById(Lastsorted).checked = true;
        setTimeout(Sorted,5000);
        Show();
    }else{
        console.log("Repetiu");
        Sorted();
    } 
} 

function Show(){
    document.getElementById("slot0").value = Table[0];
    document.getElementById("slot1").value = Table[1];
    document.getElementById("slot2").value = Table[2];
    document.getElementById("slot3").value = Table[3]; 
}