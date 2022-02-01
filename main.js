function button (x){
    if(x=="c"){
        return document.getElementById('display').value = "";
    }
    document.getElementById('display').value += x;
}

function result (x){
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}

function eraseLastChar (){
    var string = document.getElementById('display').value;
    string = string.substring(0, string.length - 1);
    return document.getElementById('display').value = string;
}

