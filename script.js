function calculate() {
    let opr = prompt('Enter the operation sign you want to perform e.g +, -, /, *');
    let fnum = prompt('Enter the first number');
    let snum = prompt('Enter the second number');

    if(opr=='+') {
        let result = Number(fnum) + Number(snum);
        alert(result);
    }
    else if(opr=='-') {
        let result = Number(fnum) - Number(snum);
        alert(result);
    }
    else if(opr=='*') {
        let result = Number(fnum) * Number(snum);
        alert(result);
    }
    else if(opr=='/') {
            let result = Number(fnum) / Number(snum);
            alert(result);
    }

   

}

document.getElementById('demo').innerHTML=calculate();