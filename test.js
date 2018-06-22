var zScoreObj = require('./index');

var dataset = [23, 45, 12, 45, 56, 65, 77, 88];
var unbiased = true;
var zScore = new zScoreObj();
zScore.setMeanAndDeviationFromDataset(dataset, unbiased)

console.log('z-score of sample with value 23: ', zScore.getZScore(23));

// Set mean and deviation directly
zScore.setMeanAndDeviation(151, 10);
console.log('z-score of sample with value 172', zScore.getZScore(172));

zScore.setMeanAndDeviation(25.1, 6.4);
console.log('z-score of sample with value 37', zScore.getZScore(37));


