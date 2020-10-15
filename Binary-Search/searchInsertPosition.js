const searchInsert = function(nums, target) {
    let firstIndex = 0
    let lastIndex = nums.length - 1
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2)
    
    
    while(firstIndex < lastIndex){
        middleIndex = Math.floor((firstIndex + lastIndex) / 2)
         let middleElement = nums[middleIndex]
         
         if(middleElement === target){
             return middleIndex
         } else if(middleElement > target) {
             lastIndex = middleIndex         
         } else {
             firstIndex = middleIndex + 1
         }
    
    }
    return middleIndex
    
    
};