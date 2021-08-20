// Question 1 complexity O(N^2) I think? because the longer the array the includes function will exponentially grow in amount of work
// THIS IS UGLY, but I don't want to redo it
const sumZero = arr => {
  for (let i=0; i<arr.length; i++) {
    let element = arr[i]
    let opp = 0
    if (element < 0) {
      opp = element + (2 * element)
    } else if (element > 0) {
      opp = element - (2 * element)
    } else {
      arr.splice(i,1)
    }
    if (arr.includes(opp)) {
      return true
    }
  };
  return false
}
// const array = [ 1, 5, 0, 1, -5]
// console.log(sumZero(array))


// Question 2 complexity log(n) cache can only get to 26 letters at most and after that it will always be false so thats when the work will top out
// I like this one
const uniq = str => {
  cache = []
  for (let i=0; i<str.length; i++) {
    if (cache.includes(str[i])) return false
    else cache.push(str[i])
  }
  return true
}

// const string = 'abcaaaa'
// console.log(uniq(string))

// Question 3 complexity O(N) it depends on the string length sent in and worst case is that there are never 26 unique characters so it could iterate through the whole array in a worst case.
// Works with spaces and special characters!
const para = sent => {
  let cache = []
  for (let i=0; i<sent.length; i++) {
    char = sent[i].toLowerCase()
    if (!(/[a-z]/).test(char)) continue
    else if (cache.includes(char)) continue
    else cache.push(char)

    if (cache.length === 26) return true
  }
  return false
}

const sentence = "The quick brown fox jumps over the lazy dog"
console.log(para(sentence))

// Question 4 complexity O(N) because it's dependent on how long the array argument is
// Quick and easy. I liked this one too. 
const longestWord = arr => {
  let length = 0
  arr.forEach(element => {
    if (element.length > length) length = element.length
  });
  return length
}

// let arrTest = ['hi', 'adfasdfadsfasdfadsadsfasdfdasfadsfadsfadsf', 'hello', 'adfadsfasdfadsfadsfadsfadsf']
// console.log(longestWord(arrTest))