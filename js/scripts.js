class Construction {
    constructor(color1, color2, color3) {
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
        this.palette = palette;
    }
    generateColor(r,g,b) {
        
    }
}

const r = Math.floor(Math.random() * 255); 
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);

console.log(`rgb(${r},${g},${b})`);