function calculateSum(a, b) {
    return a + b;
}

// Example usage
var num1 = 5;
var num2 = 10;
var sum = calculateSum(num1, num2);

console.log("The sum of", num1, "and", num2, "is", sum);

document.getElementById("result").textContent = "The sum of " + num1 + " and " + num2 + " is " + sum;