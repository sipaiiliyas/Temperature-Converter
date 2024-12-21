const calcius = document.querySelector("#calcius");
const fahrenheit = document.querySelector("#farenheit");
const kelvin = document.querySelector("#kelvin")




 calcius.addEventListener("input", function () {
    let c = parseFloat(calcius.value);
    let f = (c * 9/ 5) +32;
    let k = c + 273.15;
    fahrenheit.value = f;
    kelvin.value = k;
 });

 fahrenheit.addEventListener("input", function (){
   let f = parseFloat(fahrenheit.value);
   let c = (f - 32) * 5 / 9 ;
   let k = (f - 32) * 5 / 9 + 273.35;
    calcius.value = c;
    kelvin.value = k;
})

console.log(calcius,fahrenheit,kelvin);

kelvin.addEventListener ("input", function () {
   let k = parseFloat(kelvin.value);
    let c = k - 273.15;
    let f = (k - 273.15) * 9 / 5 + 32;
    calcius.value = c;
    fahrenheit.value = f;
})