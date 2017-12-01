var a = prompt("First number", "Please enter first number");
var b = prompt("Second number", "Please enter second number");
document.write("Calculation result is ", (a * a) - (2 * a * b) + (b * b));
var value = (a * a) - (2 * a * b) + (b * b);

if (value > 0) {
    document.write(' calculation result is bigger than zero');
} else if (value < 0) {
    document.write(' calculation result is less than zero');
} else {
    document.write(' the result is zero');
}