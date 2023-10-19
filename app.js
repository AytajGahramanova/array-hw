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
// const arr = [6, 1, 1, 2, 2, 7, 7, 7];
// let max = arr[0];
// let min = arr[0];
// let maxCount = 0;
// let minCount = 0;
// let sum = 0;

// for(let i = 0; i < arr.length; i++){
//     sum+=arr[i]
//     if(arr[i] > max){
//         max = arr[i];
//         maxCount = 1;
//     }else if(arr[i] == max) {
//         maxCount++;
//     }
// }
// for(i=0; i<arr.length;i++){
//     if(arr[i] < min){
//         min = arr[i];
//         minCount = 1;
//     }else if(arr[i] == min) {
//         minCount++;
//     }
// }

// console.log(sum-max * maxCount - min * minCount);


// TASK - 3 --> n tam ədəddən ibarət massiv proqramın girişinə tərs ardıcıllıqla verilmişdir - yəni sonuncudan birinci elementə qədər. Bu massivin ilkin vəziyyətini bərpa edin.
// let numArr = [8, -3, 12, 0, 5, -7];
// let reverse = [];

// for(let i = numArr.length - 1; i >= 0; i--){
//     reverse.push(numArr[i]);
// }
// console.log(reverse);