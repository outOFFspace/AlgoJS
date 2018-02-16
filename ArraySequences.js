/**
Given an array of integers (sorted), find the sequences of integers. e.g. [4,5,7,9,10,12] should return 
[4,5], [7], [9,10],[12]
*/


function findSequences(a) {
  const res = {}
  let seqI = 0

  for (let i = 0; i < a.length; i++) {
    if (!res[seqI]) {
      res[seqI] = []
    }
    if (!a[i - 1]) {
      res[seqI] = [a[i]]
      continue
    }
    if (a[i] - a[i - 1] == 1) {
      res[seqI].push(a[i])
    } else {
      // create new sequence
      seqI++
      res[seqI] = [a[i]]
    }
  }

  return res
}

console.log(findSequences([4, 5, 7, 9, 10, 12]))
console.log(findSequences([1, 2, 3, 5, 7, 9, 10, 12]))
