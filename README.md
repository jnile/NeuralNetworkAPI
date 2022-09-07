# NeuralNetworkAPI

This is my attempt at creating a simple version of a perceptron following [The Coding Train's](https://www.youtube.com/watch?v=ntKn5TPHHAk&list=PLRqwX-V7Uu6aCibgK1PTWWu9by6XFdCfh&index=2) explanation. 

The video is uses p5.js however I have coded in pure javascript and used charts.js to visualise my data and AI.

This is a very basic Perceptron; it takes in two inputs (x,y) and then returns a 1 if it is below the y=x line otherwise it returns a -1.

## File Arrangements:

- `home.html`: Contains code to load and display the data.
- `UtilityFunctions.js`: Contains simple functions to ease simplicity.
- `Perceptron.js`: Contains the Perceptron class.
- `ExternalAPIs/chart.min.js`: Contains the Charts.js API.
- `TrainingData.js`: Contains the Point class and the creation actual of training data.
- `run.js`: Creates, trains and runs the AI.
