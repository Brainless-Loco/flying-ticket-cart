function updateQuantity(clickedId,value){
    var sitID = clickedId.slice(0,5);
    var oldQ = parseInt(document.getElementById(sitID+"q").value);
    oldQ += value;
    if(oldQ>=0) document.getElementById(sitID+"q").value = oldQ;
}
function updateInfo(){
    var fClassQ = parseInt(document.getElementById("firstq").value);
    var eClassQ = parseInt(document.getElementById("econoq").value);
    fClassQ *= 150;
    eClassQ *= 100;
    var subTotal = fClassQ+eClassQ;
    document.getElementById("sub-total").innerText = subTotal;
    var tax = Math.ceil(subTotal/10);
    document.getElementById("tax").innerText = tax;
    document.getElementById("total").innerText = tax+subTotal;
}

var getTouch = document.querySelector(".booking-form");
getTouch.addEventListener("click",function(event){
    var clickedId = event.target.id;
    if(clickedId.charAt(5)!="q"){
        if(clickedId.charAt(5)=="p") var PlusOrMinus = 1;
        else var PlusOrMinus = -1;
        updateQuantity(clickedId,PlusOrMinus);
    }
    updateInfo();
})