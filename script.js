function verificarTarjeta() {
    const numero = document.getElementById('cardNumber').value.replace(/\D/g, '');

    if (numero.length === 0) {
        alert("Por favor, ingresa un número de tarjeta.");
        return;
    }

    if (esValida(numero)) {
        document.getElementById('result').innerText = "La tarjeta de crédito es válida.";
        document.getElementById('result').classList.remove('invalid');
        document.getElementById('result').classList.add('valid');
    } else {
        document.getElementById('result').innerText = "La tarjeta de crédito NO es válida.";
        document.getElementById('result').classList.remove('valid');
        document.getElementById('result').classList.add('invalid');
    }
}

function esValida(numero) {
    let suma = 0;
    let longitud = numero.length;
    let esPar = false;

    for (let i = longitud - 1; i >= 0; i--) {
        let digito = parseInt(numero[i]);

        if (esPar) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9;
            }
        }

        suma += digito;
        esPar = !esPar; 
    }

    return suma % 10 === 0;
}
