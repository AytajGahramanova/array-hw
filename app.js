// TASK - 1  --> Ən böyük elementlərin sayı//
// let numArr = [1, 6, 2, 6, 2, 8, 11];
// let max = numArr[0];
// let counter = 0;

// for(let i = 0 ; i < numArr.length; i++){
//     if(numArr[i] > max){
//         max = numArr[i];
//         counter++;
//     }
// }
// console.log(counter);


// TASK - 2 -->  Ən böyük və ən kiçiklərindən başqa
// N sayda tam ədədlərdən ibarət massiv verilir. Bu massivin ən kiçik və ən böyük elementlərindən başqa bütün elementlərinin cəmini tapın.//
// let arr = [2, 4, 8, 10, 5];
// let sum = 0;
// let max = arr[0];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }
// console.log("max: ", max);

// let min = arr[0];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < min){
//         min = arr[i];
//     }
// }
// console.log("min: ", min);

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max && arr[i] < min){
//         continue;
//     }else{
//         sum += arr[i];
//     }
// }
// console.log(sum - max - min);


// TASK - 3 --> n tam ədəddən ibarət massiv proqramın girişinə tərs ardıcıllıqla verilmişdir - yəni sonuncudan birinci elementə qədər. Bu massivin ilkin vəziyyətini bərpa edin.
// let numArr = [8, -3, 12, 0, 5, -7];
// let reverse = [];

// for(let i = numArr.length - 1; i >= 0; i--){
//     reverse.push(numArr[i]);
// }
// console.log(reverse);