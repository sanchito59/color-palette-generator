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
        }
        ;
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
        }
        ;
        return false;
    }
}

// Business Logic for Palettes ---------
class PaletteHolder {
    constructor() {
        this.palettes = [];
    }
    addPalette(palette) {
        this.palettes.push(palette);
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

let colorPaletteHolder = new ColorPaletteHolder();
// let palettes = new PaletteHolder();
$(document).ready(function () {
    // attachpaletteListeners();
    function savePalette() {
        let newPalette = new Palette(colorPalette[0], colorPalette[1], colorPalette[2], colorPalette[3], colorPalette[4]);
        colorPaletteHolder.addPalette(colorPalette);
        console.log('savedPalette(): ', colorPaletteHolder);
        return colorPaletteHolder;
    }
    //NEW CODE^^^^ needs work

    let colorPalette = [];
    const colorLength = 5;
    const squares = $('.color-box');
    

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

    function displayPalette(paletteToDisplay) {
        let paletteList = $('li #' + colorPaletteHolder.currentId);
        console.log(paletteList);
        // console.log('LOOKY HERE: ', paletteToDisplay.palettes);
        $('#palettes').show();
        for(let i = 0; i < paletteToDisplay.palettes.length; i++){
            console.log('TEST', i);
            const paletteLayout = `<li id='${colorPaletteHolder.currentId}'><h4>Palette: ${colorPaletteHolder.currentId}</h4>
            <div class="wrapper2">
            <div class="color-box2"></div>
            <div class="color-box2"></div>
            <div class="color-box2"></div>
            <div class="color-box2"></div>
            <div class="color-box2"></div>
            </div></li>`
            //This code produces duplicates saving "1 then 2 then 3, not appending proper colors either"
            // console.log(colorPaletteHolder.currentId);
            // console.log('HERE: ', savedPalette[i]);
            $('#palettes').append(paletteLayout);
            const savedPalette = $('.color-box2');
            for (let i = 0; i < paletteLayout.length; i++) {
                console.log('forLoop savedPal:', savedPalette[i]);
                savedPalette[i].style.background = colorPalette[i];
            }
        }
    }

    function init() {
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
        console.log('colorPaletteHolder: ', colorPaletteHolder)
        savePalette();
        displayPalette(colorPaletteHolder);
    });
})
