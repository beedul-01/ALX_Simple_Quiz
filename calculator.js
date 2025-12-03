document.addEventListener("DOMContentLoaded", function (){
    function add(number1, number2){
        return number1 + number2;
    }

    function subtract(number1, number2){
        return number1 - number2;
    }

    function multiply(number1, number2){
        return number1 * number2;
    }

    function divide(number1, number2){
        return number1 / number2;
    }
    
    let adder  = document.getElementById("add");
    let subtractor = document.getElementById("subtract");
    let multiplyer = document.getElementById("multiply");
    let divider = document.getElementById("divide");

    adder.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
    });

    multiplyer.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
    });

    subtractor.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
    });

    divider.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
    });
});
