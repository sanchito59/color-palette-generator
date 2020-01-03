// Business Logic for ColorPaletteHolder
class ColorPaletteHolder {
    constructor() {
        this.palettes = [],
            this.currentId = 0;
    }
    addPalette(palette) {
        palette.id = this.assignId();
        this.palettes.push(palette);
    }
    assignId() {
        this.currentId += 1;
        return this.currentId;
    }
    findPalette(id) {
        for (let i = 0; i < this.palettes.length; i++) {
            if (this.palettes[i]) {
                if (this.palettes[i].id == id) {
                    return this.palettes[i];
                }
            }
        };
        return false;
    }
    deletePalette(id) {
        for (let i = 0; i < this.palettes.length; i++) {
            if (this.palettes[i]) {
                if (this.palettes[i].id == id) {
                    delete this.palettes[i];
                    return true;
                }
            }
        };
        return false;
    }
}

class Palette {
    constructor(color1, color2, color3, color4, color5) {
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
        this.color4 = color4;
        this.color5 = color5;
    }
}

const displayIndividualColor = () => {
    $('p#palettes').on('click', 'div', function (event) {
        $('#current-color').fadeIn();
        let color = this.style.backgroundColor;
        rgbSplit = color.slice(4, -1).split(',');
        r = parseInt(rgbSplit[0]);
        g = parseInt(rgbSplit[1]);
        b = parseInt(rgbSplit[2]);
        $('.color-value').text(color);
        let colorDisplayDiv = document.getElementById('current-color');
        colorDisplayDiv.style.background = color;
        event.stopPropagation();
        fullColorHex(r,g,b);

        // setTimeout(function () {
        //     $('#current-color').fadeOut();
        // }, 5000);
    });
}

//Converts a single R,G, or B value to hex
const rgbToHex = (rgb) => {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}

//Converts all RGB values at once
const fullColorHex = (r, g, b) => {
    let red = rgbToHex(r)
    let green = rgbToHex(g)
    let blue = rgbToHex(b)
    hexCode = red + green + blue;
    console.log(hexCode);
    return hexCode;
}

function hexToR(h) {
    return parseInt((cutHex(h)).substring(0, 2), 16)
}
function hexToG(h) {
    return parseInt((cutHex(h)).substring(2, 4), 16)
}
function hexToB(h) {
    return parseInt((cutHex(h)).substring(4, 6), 16)
}

//If '#' is present in hex value it will be removed, #FFFFFF => FFFFFF
function cutHex(h) {
    return (h.charAt(0) == "#") ? h.substring(1, 7) : h
}

const fullHexToRGB = (color) => {
    color = cutHex(color);
    red = hexToR(color);
    green = hexToG(color);
    blue = hexToB(color);
    hexCodeToRGB = 'rgb(' + red + ", " + green + ", " + blue + ")";
    // console.log(hexCodeToRGB);
    return hexCodeToRGB;
}

//WORK IN PROGRESS need to match color IDs
const changeColor = (color) => {
    newColor = fullHexToRGB(color);
    console.log(newColor);
    console.log('ul ID: ', $('#saved-palettes ul').attr('id'));
    // console.log(colorPaletteHolder.palettes);
    for(let i = 0; i < colorPaletteHolder.palettes.length; i++) {
        console.log('colorPaletteHolder.palettes ID: ', colorPaletteHolder.palettes[i].id.toString());
    }
    document.getElementById('current-color').style.background = newColor;
}

let colorPaletteHolder = new ColorPaletteHolder();

$(document).ready(function () {
    displayIndividualColor();
    $('#color-change-input').on('change', function () {
        let newColor = $('#color-change-input').val();
        changeColor(newColor);
    })
    const savePalette = () => {
        let newPalette = new Palette(colorPalette[0], colorPalette[1], colorPalette[2], colorPalette[3], colorPalette[4]);
        colorPaletteHolder.addPalette(colorPalette);
        // console.log('savedPalette(): ', colorPaletteHolder);
        return colorPaletteHolder;
    }

    let colorPalette = [];
    const colorLength = 5;
    const squares = $('.palette-color');

    const generateColor = () => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return newRGB = `rgb(${r}, ${g}, ${b})`;
    }

    const paletteArray = () => {
        for (let i = 0; i < colorLength; i++) {
            colorPalette.push(generateColor());
        }
        return colorPalette;
    }

    const setColors = () => {
        for (let i = 0; i < colorPalette.length; i++) {
            squares[i].style.background = colorPalette[i];
            $(squares[i]).text(colorPalette[i]);
        }
    }

    const displayPalette = (paletteToDisplay) => {
        $('#palettes').show();
        for (let i = 0; i < paletteToDisplay.palettes.length; i++) {
            const paletteLayout = `<ul id='${colorPaletteHolder.currentId}'><h4>Palette: ${colorPaletteHolder.currentId}</h4>
            <div class="wrapper2">
            <div class="palette-display color-box${colorPaletteHolder.currentId}" id='color1'></div>
            <div class="palette-display color-box${colorPaletteHolder.currentId}" id='color2'></div>
            <div class="palette-display color-box${colorPaletteHolder.currentId}" id='color3'></div>
            <div class="palette-display color-box${colorPaletteHolder.currentId}" id='color4'></div>
            <div class="palette-display color-box${colorPaletteHolder.currentId}" id='color5'></div>
            </div></ul>`
            $('#palettes').append(paletteLayout);
            const savedPalette = $('.color-box' + colorPaletteHolder.currentId);
            for (let i = 0; i <= 5; i++) {
                savedPalette[i].style.background = colorPalette[i];
            }
        }
    }

    $('div#saved-palettes').on('click', 'ul', function () {
        $('#test-theme-button').fadeIn();
        if ($('#test-theme-button').hasClass('pulse')) {
            $('#test-theme-button').removeClass('pulse');
        } else {
            $('#test-theme-button').addClass('pulse');
            setTimeout(function () {
                $('#test-theme-button').removeClass('pulse');
            }, 2000)
        }
        $('#theme-ID').text(this.id);
        const paletteTheme = () => {
            let paletteID = this.id - 1;
            let selectedPalette = colorPaletteHolder.palettes[paletteID];
            return selectedPalette;
        }
        let selectedTheme = paletteTheme();
        $('#test-theme-button').click(function () {
            $('#test-theme-button').removeClass('pulse');
            $('#theme-body').fadeIn();
            console.log(selectedTheme)
            let bodyBackgroundColor = selectedTheme[0];
            let headerColor = selectedTheme[1];
            let textColor = selectedTheme[2];
            let testContentBackground = selectedTheme[3];
            let sidebarColor = selectedTheme[4];

            document.getElementById('theme-body').style.backgroundColor = bodyBackgroundColor;
            document.getElementById('test-header').style.backgroundColor = headerColor;
            document.getElementById('test-header').style.color = textColor;
            document.getElementById('test-sidebar').style.backgroundColor = sidebarColor;
            document.getElementById('test-content').style.backgroundColor = testContentBackground;
            document.getElementById('test-footer').style.backgroundColor = textColor;
        })
    })

    const init = () => {
        colorPalette = [];
        generateColor();
        paletteArray();
        setColors();
        return colorPalette;
    }

    init();
    $('#new-palette-button').click(function () {
        init();
    });

    $('#save-palette-button').click(function () {
        savePalette();
        displayPalette(colorPaletteHolder);
    });
})
