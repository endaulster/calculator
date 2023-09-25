
function add(a, b)
{
    let result = a + b;
    return result;
}

function substract(a, b)
{
    let result = a - b;
    return result;
}

function multiply(a, b)
{
    let result = a * b;
    return result;
}

function divide(a, b)
{
    let result = a / b;
    return result;
}

// operator 

function operate(a, type, b)
{

    let result = type(a, b);
    return result;
}

console.log(operate(2, multiply, 10));