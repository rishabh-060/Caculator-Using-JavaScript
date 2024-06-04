const input = document.getElementById('input-feild');
const result = document.getElementById('result-feild');
let ans = '';

const handleClickButton = (el) => {
    const exp = `${input.value}${el.innerText}`;

    input.value = exp;
    ans = eval(exp);
    
};

const reset = () => {
    input.value = '';
    result.value = '';
}

// trying to add functionality to '=' button

const manageResult = () => {
    result.value = ans;
}