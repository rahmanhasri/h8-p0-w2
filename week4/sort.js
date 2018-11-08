// Sort recursive
// function sort (arr) {
//   let done = false;
//   if (done){
//     return arr
//   } else {
//     done = true;
//     for (let i = 0; i<arr.length-1; i++){
//       if (arr[i] > arr[i+1]){
//         done = false;
//         let tmp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = tmp
//       }
//     }
//   }
//   return sort(arr)
// }

// console.log(sort([ 5, 4, 6, 3, 7, 2, 8 ]));

// function sort es6
// function sorting(arr){
//   return arr.sort((a, b) => a - b);
// }
//
// let arr = [ 5, 4, 6, 3, 7, 2, 8 ]
// console.log(sorting(arr));

function bubble_sort(arr)
{
    for (i=0 to arr.length-1)
    {
        if(arr[i] > arr[i+1])
        {
            swap(arr, i);
            return bubble_sort(arr);
        }
    }
    return arr;
}

console.log(bubble_sort([ 5, 4, 6, 3, 7, 2, 8 ]));
