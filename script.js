const buttons = document.querySelectorAll(".buttons button");
const output = document.querySelector("#output");

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(operator, num1, num2){
    var tempResult;
    switch(operator){
        case '+': tempResult = add(num1, num2);
        break;
        case '-': tempResult = subtract(num1, num2);
        break;
        case '/': tempResult = divide(num1, num2);
        break;
        case '*': tempResult = multiply(num1, num2);
        break;
    }
    return tempResult;
}

var num1 = 0, operator, num2 = 0;

function working(){
    let operandClick= false;

    buttons.forEach(button => {
        button.addEventListener("click", ()=>{
            if(button.classList.contains("number")){
                if(!operandClick){
                    num1 = (num1 * 10) + Number(button.textContent);
                    output.textContent = num1;
                }
                else{
                    num2 = (num2 * 10) + Number(button.textContent);
                    output.textContent = num2;
                }
            }
            if(button.classList.contains("clear")){
                output.textContent = "0";
                num1 = 0;
                num2 = 0;
                !operandClick;
            }
            if(button.classList.contains("sign")){
                if(!operandClick){
                    num1 = num1 * -1;
                    output.textContent = num1;
                }
                else{
                    num2 = num2 * -1;
                    output.textContent = num2;
                }
            }
            if(button.classList.contains("percent")){
                if(!operandClick){
                    num1 = num1 / 100;
                    output.textContent = num1;
                }
                else{
                    num2 = num2 /100;
                    output.textContent = num2;
                }
            }
            if(button.classList.contains("divide")){
                operator = "/";
                operandClick = true;
            }
            if(button.classList.contains("multiply")){
                operator = "*";
                operandClick = true;
            }
            if(button.classList.contains("minus")){
                operator = "-";
                operandClick = true;
            }
            if(button.classList.contains("add")){
                operator = "+";
                operandClick = true;
            }
            if(button.classList.contains("result")){
                var result = operate(operator, num1, num2);
                operandClick = false;
                output.textContent = result;
                num1 = result;
                num2 = 0;
            }
        })
    })
}

working();






