function ExampleConstructor() {

}
console.log('prototype ExampleConstrustor', ExampleConstructor.prototype);
console.log('typeof ExampleConstrustor', typeof ExampleConstructor);

var aVariable = new ExampleConstructor();
console.log('new ExampleConstructor aVariable', aVariable);

var anotherVariable = aVariable instanceof ExampleConstructor;
console.log('is instanceof ExampleConstructor', anotherVariable);
