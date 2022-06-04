function compare(){
    let num1 = document.getElementById('input-1').value;
    let num2 = document.getElementById('input-2').value;
    let max = Math.max(num1, num2);
    document.getElementById('ans').innerHTML = max;   
}