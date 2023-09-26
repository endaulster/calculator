
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
    glowNumber(aNumber);
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
        glowOper(aOper);
        if (displayRefreshed == true)
        {

        } else if (displayRefreshed == false && operOn == false)
        {
            operSelection = aOper.textContent;
            first = display.textContent;
            operOn = true;
            displayRefreshed = true;
            blinker(display);
        } 
    }
);

let opera = Array.from(document.querySelectorAll(".igualador"));

opera.forEach( aIgual => aIgual.onclick = 
    function()
    {
        glowOper(aIgual);
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
        blinker(display);
        glowS(aR);
    }
);

function blinker(z){
    z.classList.add("cambio");
    function removetrans(){
        this.classList.remove("cambio");
    }
    z.addEventListener("transitionend", removetrans);
}

function glowNumber(z){
    z.classList.add("glowN");
    function removetrans(){
        this.classList.remove("glowN");
    }
    z.addEventListener("transitionend", removetrans);
}

function glowOper(z){
    z.classList.add("glowO");
    function removetrans(){
        this.classList.remove("glowO");
    }
    z.addEventListener("transitionend", removetrans);
}

function glowS(z){
    z.classList.add("glowS");
    function removetrans(){
        this.classList.remove("glowS");
    }
    z.addEventListener("transitionend", removetrans);
}