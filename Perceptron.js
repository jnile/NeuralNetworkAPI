class Perceptron {
    constructor() {
        this.weights = [];
        this.lr = 0.1; //Learning rate

        this.initialise();
    }

    initialise() {
        for(let x = 0; x < 2; x++) {
            this.weights[x] = (Math.random()*2 - 1);
        }
    }

    // Guess the output based on 1 set of input
    guess(inputs) {
        let sum = 0;
        for(let x = 0; x< this.weights.length; x++) {
            sum += inputs[x] * this.weights[x];
        }

        return sign(sum);
    }

    // Train the data based on 1 set of input
    train(inputs, target) {
        let guessVal = this.guess(inputs);
        let error = target - guessVal;

        for(let x = 0; x < this.weights.length; x++) {
            this.weights[x] += (error * inputs[x] * this.lr);
        }
    }

    //Getter functions
    getWeights() {
        return JSON.parse(JSON.stringify(this.weights));
    }
}