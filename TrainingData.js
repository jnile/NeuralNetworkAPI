class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.label = ((y > this.f(this.x)) ? 1 : -1);
    }

    f(x) {
        return (0.3*x) - 0.2;
    }

    mappedPoints() {
        let temp = {}
        temp.x = this.x *100;
        temp.y = this.y *100;
        temp.label = this.label;
        return temp;
    }
}


//Create array of points
let data = [];

for(let x = 0; x < 100; x++) {
    data.push(new Point((Math.random() * 2)-1, (Math.random() * 2)-1));
}

function getData() {
    return data;
}