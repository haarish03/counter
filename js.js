
var h=document.getElementById("up");

h.addEventListener('click',clr)

function clr(){
    var h=document.getElementById("num").innerText;
    var a=parseInt(h)+1;
    if(h<0){
        document.getElementById("num").style.color="orange";
    }else{
        document.getElementById("num").style.color="#34e89e";
    }
    
    document.getElementById("num").innerText=a;


}


var l=document.getElementById("lo");

l.addEventListener('click',low);

function low(){
    var i=document.getElementById("num").innerText;
    var b=parseInt(i)-1;

    if(b<0){
        document.getElementById("num").style.color="orange";
    }else{
        document.getElementById("num").style.color="#34e89e";
    }

   
    document.getElementById("num").innerText=b;
}
