//for 2 unsorted arrays
//1

function findUnion(arr1, arr2) {
    let freq = new Map();
    let union = [];
    
    for (let num of arr1) {
      freq.set(num, (freq.get(num) || 0) + 1);
    }
    
    for (let num of arr2) {
      freq.set(num, (freq.get(num) || 0) + 1);
    }
    
    for (let [num, count] of freq) {
      union.push(num);
    }
    
    return union;
  }
  
  
//2 using set


function findUnion(arr1, arr2) {
    const set = new Set();
    const union = [];
  
    for (let num of arr1) {
      set.add(num);
    }
  
    for (let num of arr2) {
      set.add(num);
    }
  
    for (let num of set) {
      union.push(num);
    }
  
    return union;
  };

  // for 2 sorted arrays 
  // using 2-pointer
  class Solution {
    // Function to return a list containing the union of the two arrays.
    findUnion(a, b) {
      let i = 0,
        j = 0;
      let union = [];
  
      while (i < a.length && j < b.length) {
        // Case 1: a[i] is smaller
        if (a[i] < b[j]) {
          if (union.length === 0 || union[union.length - 1] !== a[i]) {
            union.push(a[i]);
          }
          i++;
        }
        // Case 2: b[j] is smaller
        else if (b[j] < a[i]) {
          if (union.length === 0 || union[union.length - 1] !== b[j]) {
            union.push(b[j]);
          }
          j++;
        }
        // Case 3: a[i] equals b[j]
        else {
          if (union.length === 0 || union[union.length - 1] !== a[i]) {
            union.push(a[i]);
          }
          i++;
          j++;
        }
      }
  
      // Add remaining elements from array a
      while (i < a.length) {
        if (union[union.length - 1] !== a[i]) {
          union.push(a[i]);
        }
        i++;
      }
  
      // Add remaining elements from array b
      while (j < b.length) {
        if (union[union.length - 1] !== b[j]) {
          union.push(b[j]);
        }
        j++;
      }
  
      return union;
    }
  }
  
  
  
  