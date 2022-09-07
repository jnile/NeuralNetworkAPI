let p = new Perceptron(); // Create the Perceptron
let trainingData = getData(); // Get training data

//Get original weights of the AI
const oldWeights = p.getWeights();

trainingData.forEach(pval => {
    p.train([pval.x,pval.y],pval.label);
});

const newWeights = p.getWeights();

console.log(oldWeights);
console.log(newWeights);

document.getElementById("weightDisplay").innerHTML = newWeights;

createChart();

//Create chart for the data
function createChart() {
    //Get html document for the chart
    const chartsEl = document.getElementById("training-data-chart");

    // Organise the training data
    let dataPos = [];
    let dataNeg = [];

    trainingData.forEach(p => {
        ((p.label == 1) ? dataPos.push(p) : dataNeg.push(p));
    });

    //Get data values for the AI Lines
    //Since there is no bias and when x = 0 and the guess will be 0:
    //the value of y will also be 0


    //Calculating values when x=100 and g=0
    let oldEndPoint = ((-100*oldWeights[0])/oldWeights[1]);
    let newEndPoint = ((-100*newWeights[0])/newWeights[1]);

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
        },{
            label: 'Starting AI Line',
            type: 'line',
            data: [{x:0, y: 0}, {x:100,y:oldEndPoint}],
            borderColor: 'rgb(77,77,77)'
        },{
            label: 'Current AI Line',
            type: 'line',
            data: [{x:0, y: 0}, {x:100,y:newEndPoint}],
            borderColor: 'rgb(153,255,153)'
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
}