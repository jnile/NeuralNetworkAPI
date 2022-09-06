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

console.log(data);

//Create chart for the data
const chartsEl = document.getElementById("training-data-chart");

let dataPos = [];
let dataNeg = [];

data.forEach(p => {
    ((p.label == 1) ? dataPos.push(p) : dataNeg.push(p));
});

let chartData = {
    datasets: [{
        label: 'Data Pos',
        data: dataPos,
        backgroundColor: 'rgb(0,99,0)'
    },
    {
        label: 'Data Neg',
        data: dataNeg,
        backgroundColor: 'rgb(255,0,0)'
    }]
}

const config = {
    type: 'scatter',
    data: chartData,
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            }
        }
    }
};

const chart = new Chart(chartsEl, config);
