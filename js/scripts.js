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
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const newRGB = 'rgb' + '(' + r + ',' + g + ',' + b + ')';
    console.log(newRGB);
    $('#color1').click('on', function () {
        alert('clicked color1');
        $('#color1').css('background-color', 'newRGB');
    });
})

console.log(`rgb(${r},${g},${b})`);
