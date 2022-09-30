let table = [null,null,null,null];
let numbers=[];
let maxNumber = 75;
let flag 
function play(){
    flag = true;
    createNumber();
    show();
    console.log("GO!")
    document.getElementById("play").disabled = true;
    document.getElementById("reload").disabled = false;
    document.getElementById("pause").disabled = false;
}
function pause(){
    document.getElementById("play").disabled = false;
    document.getElementById("pause").disabled = true;
    if(flag == true){
        console.log("Parou");
        return flag = false;
    }
    
}

function createNumber(){
        if(flag == true){
            if(numbers.length == maxNumber){
                if (confirm('Play again?')){
                    numbers = [];
                    location.reload(play);  
                } 
                else return;
            }
            let globe = Math.ceil(Math.random()*maxNumber);
            while(numbers.indexOf(globe)>=0){
                globe = Math.ceil(Math.random() * maxNumber);
            }
            numbers.push(globe)
            document.getElementById(globe).checked = true;
            table.unshift(globe);
            setTimeout(createNumber,1000);
            show();
        }
            
}

function show(){
    document.getElementById("slot0").value = table[0];
    document.getElementById("slot1").value = table[1];
    document.getElementById("slot2").value = table[2];
    document.getElementById("slot3").value = table[3]; 
}