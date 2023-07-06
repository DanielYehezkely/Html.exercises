function circleAreaCalc(radius) {
    return Math.PI * (Math.pow(radius, 2));
}
const circleArea = circleAreaCalc(23.5);
console.log(circleArea);

const circleAreaRounded = circleArea.toFixed(2);
console.log(circleAreaRounded);