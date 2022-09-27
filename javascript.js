let lastsorted;
let table = [null,null,null,null];
let numbers=[];
let maxNumber = 85;
function play(){
    createNumber();
    show();
}

function createNumber(){
    if(numbers.length == maxNumber){
        if (confirm('Já não há mais! Quer recomeçar?')) numbers = [];
        else return;
    }
    let globe = Math.ceil(Math.random()*maxNumber);
    while(numbers.indexOf(globe)>=0){
        globe = Math.ceil(Math.random() * maxNumber);
    }
    numbers.push(globe)
    document.getElementById(globe).checked = true;
    table.unshift(globe);
    setTimeout(createNumber,5000);
    show();
}

function show(){
    document.getElementById("slot0").value = table[0];
    document.getElementById("slot1").value = table[1];
    document.getElementById("slot2").value = table[2];
    document.getElementById("slot3").value = table[3]; 
}