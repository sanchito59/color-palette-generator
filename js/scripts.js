$(document).ready(function () {
    let colorPalette = [];
    let colorLength = 5;
    let squares = $('.color-box');
    function generateColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return newRGB = `rgb(${r}, ${g}, ${b})`;
    }
    generateColor();

    function paletteArray() {
        for (let i = 0; i < colorLength; i++) {
            colorPalette.push(generateColor());
        }
        console.log('inside paletteArray(): ', colorPalette);
        return colorPalette;
    }
    paletteArray();

    function setColors() {
        for (let i = 0; i < colorPalette.length; i++) {
            squares[i].style.background = colorPalette[i];
            console.log('colorPalette: ', i, colorPalette[i]);
            // squares.text(colorPalette[i]); //WIP
        }
    }
    setColors();

    $('#new-palette-button').click(function () {

    });
})