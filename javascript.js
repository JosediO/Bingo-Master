let table = [null,null,null,null];
let numbers=[];
let maxNumber = 75;
let flag;
function play(){
    flag = true;
    createNumber();
    show();
    document.getElementById("play").disabled = true;
    document.getElementById("reload").disabled = false;
    document.getElementById("pause").disabled = false;
}
function pause(){
    document.getElementById("play").disabled = false;
    document.getElementById("pause").disabled = true;
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
            document.getElementById(globe).checked = true;
            table.unshift(globe);
            setTimeout(createNumber,5000);
            show();
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
    } //background-image: linear-gradient(to left top, #777a39, #818441, #8a8d49, #949752, #9ea15a, #a7aa66, #b1b472, #babd7e, #c6c890, #d1d4a2, #dddfb4, #e9ebc7);
