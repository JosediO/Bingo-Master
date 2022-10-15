let table = [null,null,null,null];
let numbers=[];
let maxNumber = 75;
let flag;
let clock;

function play(){
    flag = true;
    if(numbers.length > 0){
    clock=setTimeout(createNumber,3000)
    show();
    document.getElementById("play").disabled = true;
    document.getElementById("reload").disabled = false;
    document.getElementById("pause").disabled = false;
    }else{
        createNumber();
        show();
        document.getElementById("play").disabled = true;
        document.getElementById("reload").disabled = false;
        document.getElementById("pause").disabled = false;
    }
}
function pause(){
    document.getElementById("pause").disabled = true;
    document.getElementById("play").disabled = false;
    clearTimeout(clock);
    if(flag == true){
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
            document.getElementById(globe).disabled = false;
            table.unshift(globe);
            clock = setTimeout(createNumber,5000);
            show();
        }else if(flag == false){
            
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