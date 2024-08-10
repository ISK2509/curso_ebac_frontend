const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const numberOneInput = document.getElementById('number-one');
    const numberTwoInput = document.getElementById('number-two');

    const numberOne = parseFloat(numberOneInput.value);
    const numberTwo = parseFloat(numberTwoInput.value);

    const tudoCerto = document.querySelector('.tudoCerto');
    const numInvalido = document.querySelector('.numInvalido');

    numberOneInput.value = '';
    numberTwoInput.value = '';

    if (numberOne < numberTwo) {
        tudoCerto.innerHTML = `OK! O número <b>${numberOne}</b> é MENOR que o número <b>${numberTwo}</b>.`;
        tudoCerto.style.display = 'block';
        numInvalido.style.display = 'none';
        
        numberOneInput.value = '';
        numberTwoInput.value = '';
    } else {
        numInvalido.innerHTML = `ATENÇÃO! O número <b>${numberOne}</b> é MAIOR que o número <b>${numberTwo}</b>.`;
        tudoCerto.style.display = 'none';
        numInvalido.style.display = 'block';
        
    }
});