const numero = document.getElementById("numero");
const form = document.getElementById("formulario");
const t_area = document.getElementById("text-area");


form.addEventListener("submit", function(e){
    e.preventDefault();
    let num = Number(numero.value);
    t_area.textContent = calcularFactorial(num);
});

function calcularFactorial(num){
    if(num<1) return "0 = 0";
    let factorial = 1;
    let secuencia = [];
    for(let i = 1; i<=num; i++){
        factorial *= i;  
        secuencia.push(i);              
    }

    return secuencia.join("x") + " = " + factorial;
}
