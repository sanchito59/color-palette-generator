$(document).ready(function () {
    function generateColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return newRGB = `rgb(${r}, ${g}, ${b})`;
    }
    generateColor();

    $('#new-palette-button').click(function(){
        const color1 = generateColor();
        const color2 = generateColor();
        const color3 = generateColor();
        const color4 = generateColor();
        const color5 = generateColor();
        document.getElementById('color2').style.background = color2;
        document.getElementById('color3').style.background = color3;
        document.getElementById('color4').style.background = color4;
        document.getElementById('color5').style.background = color5;
        $('#color1').html(color1);
        $('#color2').html(color2);
        $('#color3').html(color3);
        $('#color4').html(color4);
        $('#color5').html(color5);
    });
})

