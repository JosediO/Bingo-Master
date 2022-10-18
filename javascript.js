let visor = [null,null,null,null];
let numbers= initNumber(75);
let sorted;
let action = 'HOME';

function initNumber(number){
    let array=[];
    for(let i=1;i<=number;i++){
        array.push(i);
    }
    return array;
}

game();

function createNumber(){
    if(numbers.length == 0){
        endGame();
        if (confirm('Play Again?') == true){
            location.reload(game);
        } 
    }else{
        let globe = Math.floor(Math.random()*numbers.length);
        sorted = numbers[globe];
        numbers.splice(globe,1);
        visor.unshift(sorted);
        document.getElementById(sorted).disabled = false;
        show();
    }
}

function play(){
    action = 'START';
    Disabled("play");
    Enabled("reload");
    Enabled("pause");
}

function pause(){
    action = 'PAUSE';
    Enabled("play");
    Disabled("pause"); 
    
}

function endGame(){
    action = 'ENDGAME';
    Disabled("play");
    Disabled("pause");

}

function Enabled(space){
    document.getElementById(space).disabled = false;
}

function Disabled(space){
    document.getElementById(space).disabled = true;
}

function EnableVisor(condition,slotBg){
    if(condition !=null){
        document.getElementById(slotBg).style.background = "radial-gradient(ellipse at 74% 71%, rgba(147, 147, 1, 1) 0%, rgba(247, 255, 92, 1) 95%, rgba(253, 240, 123, 1) 100%)";
    }
}

function show(){
    document.getElementById("slot0").value = visor[0];
    document.getElementById("slot1").value = visor[1];
    document.getElementById("slot2").value = visor[2];
    document.getElementById("slot3").value = visor[3];
    EnableVisor(visor[0], "firstSlot");
    EnableVisor(visor[1],"s1");
    EnableVisor(visor[2],"s2");
    EnableVisor(visor[3],"s3");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function game(){
    while(action != 'RESTART'){
        switch(action){
            case 'START':
                createNumber();
                show();
                await sleep(5000);
                break;
            
            case 'PAUSE':
                await sleep(2000);
                break;
            
            case 'HOME':
                await sleep(500);
                break;
        }
    }
    Disabled("pause");
    Disabled("play");       
}