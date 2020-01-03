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
        $('.color-value').text(color);
        let colorDisplayDiv = document.getElementById('current-color');
        colorDisplayDiv.style.background = color;
        event.stopPropagation();
        // setTimeout(function () {
        //     $('#current-color').fadeOut();
        // }, 5000);
    });
}

let colorPaletteHolder = new ColorPaletteHolder();

$(document).ready(function () {
    displayIndividualColor();
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
        console.log(paletteToDisplay.palettes.length);
        for (let i = 0; i < paletteToDisplay.palettes.length; i++) {
            const paletteLayout = `<ul id='${colorPaletteHolder.currentId}'><h4>Palette: ${colorPaletteHolder.currentId}</h4>
            <div class="wrapper2">
            <div class="palette-display color-box${colorPaletteHolder.currentId}"></div>
            <div class="palette-display color-box${colorPaletteHolder.currentId}"></div>
            <div class="palette-display color-box${colorPaletteHolder.currentId}"></div>
            <div class="palette-display color-box${colorPaletteHolder.currentId}"></div>
            <div class="palette-display color-box${colorPaletteHolder.currentId}"></div>
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
