const search = function(nums, target) {
    let firstIndex = 0
    let lastIndex = nums.length - 1
    
    while(firstIndex <= lastIndex){
         let middleIndex = Math.floor((firstIndex + lastIndex) / 2)
         let middleElement = nums[middleIndex]
         
         if(middleElement === target){
             return middleIndex
         } else if(middleElement > target) {
             lastIndex = middleIndex - 1         
         } else {
             firstIndex = middleIndex + 1
         }
    }
    return -1
};