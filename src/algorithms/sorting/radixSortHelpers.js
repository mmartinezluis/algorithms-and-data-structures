function getDigit(num, i) {
    return Math.floor(num/(Math.pow(10,i)) % 10)
  }

  function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) +1
  } 

  function mostDigits(nums) {
    let max = 0;
    for(let i =0; i < nums.length; i++){
        max = Math.max(max, digitCount(nums[i]));
    }
    return max;
  }

  function radixSort(arr){
    let maxDigitCount = mostDigits(arr);
    for(let k =0; k < mostDigits.length; k++){
      let digitBuckets = Array.from({length:10}, () => []);
      for(let i=0; i < arr.length; i++){
        let digit = getDit(arr, i);
        digitBuckets[digit].push(nums[i])
      }
      nums = [].concat(...digitBuckets);
    }
    return nums;
  }