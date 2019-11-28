$(document).ready(function () {
    let colorPalette = [];
    let colorLength = 5;
    let squares = $('.color-box');

    function generateColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return newRGB = `rgb(${r}, ${g}, ${b})`;
    }
    function paletteArray() {
        for (let i = 0; i < colorLength; i++) {
            colorPalette.push(generateColor());
        }
        return colorPalette;
    }
    function setColors() {
        for (let i = 0; i < colorPalette.length; i++) {
            squares[i].style.background = colorPalette[i];

            $(squares[i]).text(colorPalette[i]); //WIP
        }
    }
    function init() {
        colorPalette = [];
        generateColor();
        paletteArray();
        setColors();
    }
    init();
    $('#new-palette-button').click(function () {
        init();
    });
})