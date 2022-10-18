let table = [null,null,null,null];
let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];
let sorted;
let action = 'HOME';

game();

function createNumber(){
    validation();
    let globe = Math.floor(Math.random()*numbers.length);
    sorted = numbers[globe];
    if(sorted != undefined){
    numbers.splice(globe,1);
    table.unshift(sorted);
    document.getElementById(sorted).disabled = false;
    show();
    }
    
}
function play(){
    action = 'START';
}
function pause(){
    action = 'PAUSE';
}
function restart(){
    action = 'RESTART';
}
function endGame(){
    action = 'ENDGAME';
    document.getElementById("pause").disabled = true;
    document.getElementById("play").disabled = true;

}

function validation(){
    if(numbers.length == 0){
        if (confirm('Play Again?') == true){
                    location.reload(game);
                }else{
                    endGame();
                    console.log(action);
                    
                } 
    }
}
function show(){
    document.getElementById("slot0").value = table[0];
    document.getElementById("slot1").value = table[1];
    document.getElementById("slot2").value = table[2];
    document.getElementById("slot3").value = table[3];
    if(document.getElementById("slot0") != null ){
        document.getElementById("firstSlot").style.background = "radial-gradient(ellipse at 74% 71%, rgba(147, 147, 1, 1) 0%, rgba(247, 255, 92, 1) 95%, rgba(253, 240, 123, 1) 100%)";
    }
    if(table[1] != null){
        document.getElementById("s1").style.background = "radial-gradient(ellipse at 74% 71%, rgba(147, 147, 1, 1) 0%, rgba(247, 255, 92, 1) 95%, rgba(253, 240, 123, 1) 100%)";
    }
    if(table[2] != null){
        document.getElementById("s2").style.background = "radial-gradient(ellipse at 74% 71%, rgba(147, 147, 1, 1) 0%, rgba(247, 255, 92, 1) 95%, rgba(253, 240, 123, 1) 100%)";
    }
    if(table[3] != null){
        document.getElementById("s3").style.background = "radial-gradient(ellipse at 74% 71%, rgba(147, 147, 1, 1) 0%, rgba(247, 255, 92, 1) 95%, rgba(253, 240, 123, 1) 100%)";
    }
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
                document.getElementById("play").disabled = true;
                document.getElementById("reload").disabled = false;
                document.getElementById("pause").disabled = false;
                await sleep(5000);
                break;
            
            case 'PAUSE':
                document.getElementById("pause").disabled = true;
                document.getElementById("play").disabled = false; 
                await sleep(1000);
                break;
            
            case 'HOME':
                await sleep(500);
                break;
            case 'ENDGAME':
                document.getElementById("pause").disabled = true;
                document.getElementById("play").disabled = true;
                await sleep(500);
                break;
        }
        await sleep(1000);
        
    }
    await sleep(1000);       
}