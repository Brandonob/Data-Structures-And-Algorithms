/*
Given a m * n matrix mat of ones (representing soldiers) and zeros (representing civilians), return the indexes of the k weakest rows in the matrix ordered from the weakest to the strongest.

A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j, or they have the same number of soldiers but i is less than j. Soldiers are always stand in the frontier of a row, that is, always ones may appear first and then zeros.

ex:
let matrix = [[1,1,0,0,0],
              [1,1,1,1,0],
              [1,0,0,0,0],
              [1,1,0,0,0],
              [1,1,1,1,1]]
let k = 3

let output = getWeakestRows(matrix, k)
# => [2, 0, 3]



*/

//two indices with same amount return first one
//while statement k >= 0
//iterate through the matrix and save the weakest indexes
//count how many 0's occur at each index save it to a counter variable
//subtract 1 from k 
//[{ "2": 1 }, {"0": 2}]

//push
//pop
//shift
//unshift
//splice
//sort                                                                                                                                                                                                                                                                                                                    

//[2,4,1,2,5] => [1,2,2,4,5]
//k=2
//[1,2]

const weakestIndex = (arr, k) => {
    
}