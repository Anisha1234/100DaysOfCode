var para = document.querySelectorAll("[class^=highlight-]")
var btn = document.querySelectorAll("[class^=highlight-button-]")

btn[0].onclick = function(){
    highlight();
}

function highlight(){
    console.log("hightlight")
    for(var i=0; i<para.length;i+=1){
        var highlightColour = para[i].getAttribute("data-color");
        para[i].style.color=highlightColour;
    }
}







