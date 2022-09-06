class Perceptron {
    constructor() {
        this.weights = [];

        this.initialise();
    }

    initialise() {
        for(let x = 0; x < 2; x++) {
            this.weights[x] = (Math.random()*2 - 1);
        }
        console.log(this.weights);
    }

    guess(inputs) {
        let sum = 0;
        for(let x = 0; x< this.weights.length; x++) {
            sum += inputs[x] * this.weights[x];
        }

        return sign(sum);
    }
}