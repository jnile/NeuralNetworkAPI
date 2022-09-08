let p = new Perceptron(3); // Create the Perceptron
let trainingData = getData(); // Get training data

//Get original weights of the AI
const oldWeights = p.getWeights();

trainingData.forEach(pval => {
    p.train([1,pval.x,pval.y],pval.label);
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
        ((p.label == 1) ? dataPos.push(p.mappedPoints()) : dataNeg.push(p.mappedPoints()));
    });

    //Get data values for the AI Lines

    //Old AI Line
    //Calculate points for when x=1 and -1 then scale up to 100 to map
    let oldStartPoint = (((-oldWeights[1] * -1) - oldWeights[0])/(oldWeights[2]))*100;
    let oldEndPoint = (((-oldWeights[1] * 1) - oldWeights[0])/(oldWeights[2]))*100;
    
    //New AI Line
    let newStartPoint = (((-newWeights[1] * -1) - newWeights[0])/(newWeights[2]))*100;
    let newEndPoint = (((-newWeights[1] * 1) - newWeights[0])/(newWeights[2]))*100;

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
            data: [{x:-100, y: oldStartPoint}, {x:100,y:oldEndPoint}],
            borderColor: 'rgb(77,77,77)'
        },{
            label: 'Current AI Line',
            type: 'line',
            data: [{x:-100, y: newStartPoint}, {x:100,y:newEndPoint}],
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