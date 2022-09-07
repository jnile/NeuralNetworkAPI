class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.label = ((x > y) ? 1 : -1);
    }
}


//Create array of points
let data = [];

for(let x = 0; x < 100; x++) {
    data.push(new Point(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)));
}

function getData() {
    return data;
}