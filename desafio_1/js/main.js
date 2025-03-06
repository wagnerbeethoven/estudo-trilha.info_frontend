const btnRight = document.querySelector('.button-right'); // btnRight armazena a referência ao botão que move o elemento para a direita (.button-right).

const btnLeft = document.querySelector('.button-left'); // btnLeft armazena a referência ao botão que move o elemento para a esquerda (.button-left).

const elements = document.querySelector('.companies'); // elements armazena a referência ao elemento que será movido (.companies).

let pixels = 100; // pixels é a variável que controla a posição do elemento .companies. Inicialmente, é definida como 100, indicando que o elemento já pode começar deslocado.


// Quando o botão btnRight/btnLeft é clicado:
// O valor de pixels aumenta em 100 (ou seja, move o elemento mais para a direita/esquerda).
// A propriedade transform: translateX() do CSS é atualizada com esse novo valor, movendo o elemento .companies horizontalmente para a direita.

btnRight.addEventListener('click', function () {
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`;
});

btnLeft.addEventListener('click', function () {
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`;
})