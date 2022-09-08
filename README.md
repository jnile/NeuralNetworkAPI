# Perceptron

This is my attempt at creating a simple version of a perceptron following [The Coding Train's](https://www.youtube.com/watch?v=ntKn5TPHHAk&list=PLRqwX-V7Uu6aCibgK1PTWWu9by6XFdCfh&index=2) explanation.

The video uses p5.js however I have coded in pure javascript and used charts.js to visualise my data and AI.

This is a basic Perceptron; it takes in three inputs (the bias,x and y) and then returns a guess if the point is above or below a given linear line.(This is stated in the training data file).

## File Arrangements:

- `home.html`: Contains code to load and display the data.
- `UtilityFunctions.js`: Contains simple functions to ease simplicity.
- `Perceptron.js`: Contains the Perceptron class.
- `ExternalAPIs/chart.min.js`: Contains the Charts.js API.
- `TrainingData.js`: Contains the Point class and the creation actual of training data.
- `run.js`: Creates, trains and runs the AI.
