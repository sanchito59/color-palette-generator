$(document).ready(function () {
    function generateColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return newRGB = `rgb(${r}, ${g}, ${b})`;
    }
    generateColor();
    $('#color1').click(function () {
        generateColor();
        // $('#color1').css('background-color', 'newRGB'); //Why won't you work?
        $('#color1').html(newRGB);
        document.getElementById('color1').style.background = newRGB;
    });
    $('#color2').click(function () {
        generateColor();
        $('#color2').html(newRGB);
        document.getElementById('color2').style.background = newRGB;
    });
    $('#color3').click(function () {
        generateColor();
        $('#color3').html(newRGB);
        document.getElementById('color3').style.background = newRGB;
    });
})

