// Your Javascript Code Goes Here
function greet() {
    console.log('Hi');
}
greet();

function logGreeting(fn) {
    fn();
}
logGreeting(greet);

var greetMe = function () {
    console.log('HiIm DTD!');
}
greetMe();

logGreeting(greetMe);

logGreeting(function () {
    console.log('Hello DTD!');
});