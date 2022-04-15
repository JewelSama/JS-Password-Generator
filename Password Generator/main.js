// DOM elements
const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numberEL = document.getElementById('numbers');
const symbolEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');
const clipboardEL = document.getElementById('clipboard');




const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomUpper,
    symbol: getRandomSymbol
};

generateEL.addEventListener('click', () =>{
    const length = +lengthEL.value;
    const hasLower = lowercaseEL.checked;
    const hasUpper = uppercaseEL.checked;
    const hasNumber = numberEL.checked;
    const hasSymbol = symbolEL.checked;


    // Generate event listen


    resultEL.innerText = generatePassword(
        hasLower, hasUpper, hasNumber, hasSymbol, length);
});

//Copy password to clipboard
clipboardEL.addEventListener('click', ()=>{
    const textarea = document.createElement('textarea');
    const password = resultEL.innerText;

    if(!password){
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy')
    textarea.remove();
    alert('Password copied to clipboard!(I Love Jewel)😶');
});

//Generate password function

function generatePassword(lower, upper, number, symbol, length){

    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;
    // console.log('typesCount:', typesCount);

    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
    (item => Object.values(item)[0]
    );
    // console.log('typesArr:', typesArr);

    if(typesCount ===0) {
        return '';
    }


    for (let i = 0; i < length; i += typesCount){
    typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        // console.log('funcName:', funcName);

        generatedPassword += randomFunc[funcName]();
    });
}

const finalPassword = generatedPassword.slice(0, length);
return finalPassword
}


//Generator Functions-http://www.net-comber.com/charset.html

function getRandomLower(){
 return String.fromCharCode(Math.floor(Math.random() * 26) +97); 
}
 
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) +48);
}

function getRandomSymbol(){
    const symbols = '!""£$%^&*()[]{}~#@<>?/.,;' ;
    return symbols [Math.floor(Math.random() * symbols.length)];
}



// console.log(getRandomSymbol());