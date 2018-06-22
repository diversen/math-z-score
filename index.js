var sd = require('math-standard-deviation');

function zScore() {

    /**
     * Set mean and deviation from a dataset
     * @param {*} dataset Array
     * @param {*} unbiased boolean
     */
    this.setMeanAndDeviationFromDataset = function (dataset, unbiased) {
        this.deviation;
        if (unbiased) {
            this.deviation = sd.standardDeviation(dataset);
        } else {
            this.deviation = sd.populationStandardDeviation(dataset);
        }
        this.mean = sd.mean(dataset);
    }

    /**
     * Set mean and deviation 
     * @param {*} mean Float
     * @param {*} deviation Float
     */
    this.setMeanAndDeviation = function (mean, deviation) {
        this.mean = mean;
        this.deviation = deviation;
    }
    
    /**
     * Get z-score
     * @param {*} Float
     */
    this.getZScore =  (sampleVal)  => {
        return (sampleVal - this.mean) / this.deviation;
    }
}

module.exports = zScore;