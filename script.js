function addonscreen(y){
    let x = document.getElementById("txtarea").value;
    let operators = ['+', '-', '*', '/'];
    if(x == "0"){
        if(y == "%"){
            x += y;
            document.getElementById("txtarea").value = x;
            updateResult();
        }
        else if(y == "."){
            document.getElementById("txtarea").value = "0.";

        }
        else if(y == ")"){
            alert("Invalid.")
        }
        else{
            document.getElementById("txtarea").value = y;
        }
    }
    else{
        if(y == "%"){      
            if(operators.includes(x.charAt(x.length - 1))){
                alert("invalid sign");
            } else if(x.charAt(x.length - 1) == "."){
                x += "0%";
                document.getElementById("txtarea").value = x;
                updateResult();
            } else if(x.charAt(x.length - 1) == "("){
                alert("invalid sign");
            }
            else{
                x += y;
                document.getElementById("txtarea").value = x;
                updateResult();
            }
        }
        else if(y == "."){
            if(operators.includes(x.charAt(x.length - 1))){
                x += "0.";
                document.getElementById("txtarea").value = x;
                updateResult();
            } else if (x.charAt(x.length - 1) == "%"){
                x += "*0.";
                document.getElementById("txtarea").value = x;
                updateResult();
            } else if (x.charAt(x.length - 1) == "("){
                x += "0.";
                document.getElementById("txtarea").value = x;
                updateResult();
            } else{
                x += y;
                document.getElementById("txtarea").value = x;
                updateResult();
            }
        }
        else if(y == ")"){
            if(x.includes("(")){
                x += ")";
                document.getElementById("txtarea").value = x;
                updateResult();
            } else{
                alert("You have to first open the bracket to close it.")
            }
        }
        else if(y == "("){
            if(operators.includes(x.charAt(x.length - 1))){
                x += y;
                document.getElementById("txtarea").value = x;
            } else if (x.charAt(x.length - 1) == "%"){
                x += "*(";
                document.getElementById("txtarea").value = x;
            } else if (x.charAt(x.length - 1) == "."){
                x += "0*(";
                document.getElementById("txtarea").value = x;
            } else{
                x += "*(";
                document.getElementById("txtarea").value = x;
            }
        }
        else{
            if(x.charAt(x.length - 1) == "%"){
                x += "*y";
                document.getElementById("txtarea").value = x;
                updateResult();
            }
            x += y;
            document.getElementById("txtarea").value = x;
            if((x.split("")).some(item => operators.includes(item))){
                updateResult();
            }
        }
    }
}
function clearscreen(){
    document.getElementById("txtarea").value = "0";
    document.getElementById("resultarea").value = "";
}
function addoperator(y){
    let x = document.getElementById("txtarea").value;
    let operators = ['+', '-', '*', '/'];
    if((x.split("")).some(item => operators.includes(item))){
        updateResult();
    }
    if(operators.includes(x.charAt(x.length - 1))){
        document.getElementById("txtarea").value = x.slice(0,x.length-1) + y;
    }
    else{
        x = x+y;
        document.getElementById("txtarea").value = x;
    }
}
function calc(){
    let x = document.getElementById("txtarea").value;
    document.getElementById("resultarea").value = "";
    if (x.includes("%")) {
        document.getElementById('txtarea').value = eval(x.replace(/%/g, '/100'));
    }
    else{
        try{
            document.getElementById("txtarea").value = eval(x);
        } catch(error){
            alert("enter a valid expression");
            document.getElementById("txtarea").value = "0";
        }
    }
}
function backspace(){
    let x = document.getElementById("txtarea").value;
    if(x == 0){
        document.getElementById("txtarea").value = "0";
    } else {
        document.getElementById("txtarea").value = x.slice(0,x.length-1);
        updateResult();
    }
}
function updateResult() {
    let x = document.getElementById("txtarea").value;
    if (x.includes("%")) {
        document.getElementById('resultarea').value = eval(x.replace(/%/g, '/100'));
    } else{
        try {
            let result = eval(x);
            document.getElementById("resultarea").value = result;
        } catch (error) {
            
        }
    }
}