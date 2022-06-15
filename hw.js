//Q6
let element = "",
  n = 5;
for (let index = 1; index <= n; index++) {
  for (let index2 = 1; index2 <= index; index2++) {}
  element += "*";
  console.log(element);
}

//Q5
let array1 = [100, 200, 300, 400];
console.log(array1.reverse());

//Q4
let array2 = [16, 4, 2, 0, 19, 6];
let max;
for (let index = 0; index < array2.length; index++) {
  if (index == 0) max = array2[index];
  if (max < array2[index]) max = array2[index];
}
console.log(max);

//Q3
let Numbers = [23, 54, 32, 87, 47],
  sum = 0;
for (let index = 0; index < Numbers.length; index++) {
  sum += Numbers[index];
}
console.log(sum);

//Q2
let Fahrenheit = 45;
let Celcius = (Fahrenheit - 32) / 1.8;
console.log(Fahrenheit + "°F  is " + Celcius + "°C");
// Convert it to fahrenheit and output "NN°C is NN°F"
Celcius = 45;
Fahrenheit = Celcius * 1.8 + 32;
console.log(Celcius + "°C is " + Fahrenheit + "°F");

//Q1
let length = 6;
let width = 4;
let rectangle = length * width;
console.log("The area of the rectangle is:" + rectangle);
