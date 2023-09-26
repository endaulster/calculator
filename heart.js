
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
    if(type == "+")
    {
        type=add;
    }
    if(type == "-")
    {
        type=substract;
    }
    if(type == "x")
    {
        type=multiply;
    }
    if(type == "÷")
    {
        type=divide;
    }


    let result = type(parseFloat(a), parseFloat(b));
    return result;
}

const display = document.querySelector(".display");

function refreshDisplay(z)
{
    display.innerHTML = z;
}

//let num = Array.from(document.querySelectorAll(".numero"));

let AllNumbers = Array.from(document.querySelectorAll(".numero"));

let displayRefreshed = true;

AllNumbers.forEach( aNumber => aNumber.onclick = 
    function()
    {
    if (operOn == false)
    {
        if (displayRefreshed == true)
        {
            displayRefreshed = false;
            let a = aNumber.textContent;
            refreshDisplay(a);
        } else if (displayRefreshed == false)
        {
            let a = aNumber.textContent;
            let currentD = display.textContent;
            refreshDisplay(currentD+=a);
        }
    } else if(operOn == true)
    {
        if (displayRefreshed == true)
        {
            displayRefreshed = false;
            let a = aNumber.textContent;
            refreshDisplay(a);
        } else if (displayRefreshed == false)
        {
            let a = aNumber.textContent;
            let currentD = display.textContent;
            refreshDisplay(currentD+=a);
        }
    }


    }
);

let AllOper = Array.from(document.querySelectorAll(".operador"));

let operSelection = 0;
let operOn = false;
let first, second = false;

AllOper.forEach( aOper => aOper.onclick = 
    function()
    {
        if (displayRefreshed == true)
        {

        } else if (displayRefreshed == false && operOn == false)
        {
            operSelection = aOper.textContent;
            first = display.textContent;
            operOn = true;
            displayRefreshed = true;
        } 
    }
);

let opera = Array.from(document.querySelectorAll(".igualador"));

opera.forEach( aIgual => aIgual.onclick = 
    function()
    {
       if(operOn == true)
       {
            refreshDisplay(display.textContent);
            second = display.textContent;
            let result = operate(first,operSelection,second);
            refreshDisplay(result);
            first = second;
            operOn=false;
       }
    }
);

let Refresher = Array.from(document.querySelectorAll(".b1f1"));

Refresher.forEach( aR => aR.onclick = 
    function()
    {
        operSelection = 0;
        operOn = false;
        displayRefreshed = true;
        first, second = false;
        refreshDisplay(0);
    }
);
