$(document).ready(function () {
    function Palette(color1, color2, color3, color4, color5) {
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
        this.color4 = color4;
        this.color5 = color5;
    }
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
            $(squares[i]).text(colorPalette[i]);
        }
    }

    function init() {
        colorPalette = [];
        generateColor();
        paletteArray();
        setColors();
    }
    
    init();

    function savePalette() {
        let savedPalette = new Palette(colorPalette[0], colorPalette[1], colorPalette[2], colorPalette[3], colorPalette[4]);
        console.log(savedPalette);
    }

    $('#new-palette-button').click(function () {
        init();
    });

    $('#save-palette-button').click(function () {
        savePalette();
    });
})