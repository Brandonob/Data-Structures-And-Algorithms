const peakIndexInMountainArray = function(arr) {
    let firstIndex = 0
    let lastIndex = arr.length - 1
    
    while(firstIndex < lastIndex){
         let middleIndex = Math.floor((firstIndex + lastIndex) / 2)
         
         if(arr[middleIndex] < arr[middleIndex + 1]){
             firstIndex = middleIndex + 1
         } else {
             lastIndex = middleIndex        
         } 
    }
    return firstIndex
};