/**
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
*/

let convert = function(s, numRows) {
    let vs = {};
    const n = s.length;
    let i = 0;
    let res = '';
    while (i < n) {
      for (let j = 0; j < numRows && i < n; j++) {
      	if (!vs[j]) {
        	vs[j] = [];
        }
        vs[j].push(s[i++]);
      }
      for (let j = numRows - 2; j >= 1 && i < n; j--) {    
      	if (!vs[j]) {
        	vs[j] = [];
        }
        vs[j].push(s[i++]);
      }
    }
    for (var v in vs) {
    	res += vs[v].join('');
    }    
    return res;
};

console.log(convert('PAYPALISHIRING', 3));
