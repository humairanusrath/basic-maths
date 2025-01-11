function secondLargest(arr){
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest =Number.NEGATIVE_INFINITY;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            secondLargest =largest;
            largest = arr[i];
        } else if ( arr[i] !=largest && largest> secondLargest){
            secondLargest =arr[i];

        }
            
        
    }
    return secondLargest;

}

console.log(secondLargest([2,4,5,6,8]));


//using sorting
function secondArr(arr) {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 2];
  }
  
  console.log(secondArr([2,3,4,6,8]))