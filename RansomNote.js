/**
A kidnapper wrote a ransom note but is worried it will be traced back to him. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use whole words available in the magazine, meaning he cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

Sample Input 0

give me one grand today night
give one grand today

Sample Output 0

Yes

Sample Input 1

two times three is not four
two times two is four

Sample Output 1

No

*/

function isRansom(magazine = [], ransom = []) {
  let matches = 0;		
  for (let i=0; i < ransom.length; i++) {
      if (magazine.indexOf(ransom[i]) > -1) {
          matches++;
          magazine.splice(magazine.indexOf(ransom[i]), 1);
      }    
  }

  console.log(matches == ransom.length ? 'Yes': 'No');
}

isRansom('give me one grand today night'.split(' '), 'give one grand today'.split(' '))
isRansom('two times three is not four'.split(' '), 'two times two is four'.split(' '))
