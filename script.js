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
            if(button.classList.contains("zero")){
                if(!operandClick){
                    num1 = num1 * 10 + 0;
                    output.textContent = num1;
                }
                else{
                    num2 = num2 * 10 + 0;
                    output.textContent = num2;
                }
            }
            if(button.classList.contains("one")){
                if(!operandClick){
                    num1 = num1 * 10 + 1;
                    output.textContent = num1;
                }
                else{
                    num2 = num2 * 10 + 1;
                    output.textContent = num2;
                }
            }
            if(button.classList.contains("two")){
                if(!operandClick){
                    num1 = num1 * 10 + 2;
                    output.textContent = num1;
                }
                else{
                    num2 = num2 * 10 + 2;
                    output.textContent = num2;
                }
            }
            if(button.classList.contains("three")){
                if(!operandClick){
                    num1 = num1 * 10 + 3;
                    output.textContent = num1;
                }
                else{
                    num2 = num2 * 10 + 3;
                    output.textContent = num2;
                }
            }
            if(button.classList.contains("four")){
                if(!operandClick){
                    num1 = num1 * 10 + 4;
                    output.textContent = num1;
                }
                else{
                    num2 = num2 * 10 + 4;
                    output.textContent = num2;
                }
            }
            if(button.classList.contains("five")){
                if(!operandClick){
                    num1 = num1 * 10 + 5;
                    output.textContent = num1;
                }
                else{
                    num2 = num2 * 10 + 5;
                    output.textContent = num2;
                }
            }
            if(button.classList.contains("six")){
                if(!operandClick){
                    num1 = num1 * 10 + 6;
                    output.textContent = num1;
                }
                else{
                    num2 = num2 * 10 + 6;
                    output.textContent = num2;
                }
            }
            if(button.classList.contains("seven")){
                if(!operandClick){
                    num1 = num1 * 10 + 7;
                    output.textContent = num1;
                }
                else{
                    num2 = num2 * 10 + 7;
                    output.textContent = num2;
                }
            }
            if(button.classList.contains("eight")){
                if(!operandClick){
                    num1 = num1 * 10 + 8;
                    output.textContent = num1;
                }
                else{
                    num2 = num2 * 10 + 8;
                    output.textContent = num2;
                }
            }
            if(button.classList.contains("nine")){
                if(!operandClick){
                    num1 = num1 * 10 + 9;
                    output.textContent = num1;
                }
                else{
                    num2 = num2 * 10 + 9;
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






