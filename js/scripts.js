class Construction {
    constructor(color1, color2, color3) {
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
        this.palette = palette;
    }
    generateColor(r, g, b) {

    }
}


$(document).ready(function () {
    function generateColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return newRGB = `rgb(${r}, ${g}, ${b})`;
    }
    generateColor();
    $('#color1').click('on', function () {
        generateColor();
        // $('body').css('background-color', 'newRGB'); //Why won't you work?
        document.getElementById('color1').style.background = newRGB;
    });
    $('#color2').click('on', function () {
        generateColor();
        document.getElementById('color2').style.background = newRGB;
    });
    $('#color3').click('on', function () {
        generateColor();
        document.getElementById('color3').style.background = newRGB;
    });
})

