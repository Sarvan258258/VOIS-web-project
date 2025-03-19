const outputElement = document.querySelector('#output');
const btnCopy = document.querySelector('#btnCopy');
const passwordLengthElement = document.querySelector('#length');
const numberElement = document.querySelector('#number');
const smallElement = document.querySelector('#small');
const capitalElement = document.querySelector('#capital');
const symbolElement = document.querySelector('#symbol');
const frm = document.querySelector('#frm');
btnCopy.addEventListener('click', async() => {
    const pass = outputElement.value;
    if(pass) {
        await navigator.clipboard.writeText(pass);
        alert("Copied to clickboard");
    } else {
        alert("No password is copied");
    }
})

function generateRandomChar(min, max){
    const limit = max - min + 1;
    return String.fromCharCode(Math.floor(Math.random() * limit) + min);
}

function capitalValue() {
    return generateRandomChar(65, 90);
}
function smallValue() {
    return generateRandomChar(97, 122);
}

function numberValue() {
    return generateRandomChar(48, 57);
}

function symbolValue(){ 
    const symbol = "!@#$%^&*()<>?{},.|";
    return symbol[Math.floor(Math.random() * symbol.length)];
}

const functionArray = [
    {
        element : numberElement,
        fun:numberValue
    },
    {
        element : capitalElement,
        fun : capitalValue
    },
    {
        element : smallElement,
        fun : smallValue
    },
    {
        element : symbolElement,
        fun : symbolValue
    }
];

frm.addEventListener('submit', (e) =>  {
    e.preventDefault();

    const limit = parseInt(passwordLengthElement.value);

    let generatePassword = "";
    const funArray = functionArray.filter(({element}) => element.checked);
    for(let i = 0 ; i < limit ; i ++) {
        const index = Math.floor(Math.random() * funArray.length);
        const letter = funArray[index].fun();
        generatePassword += letter;
    }
    outputElement.value = generatePassword;
});










