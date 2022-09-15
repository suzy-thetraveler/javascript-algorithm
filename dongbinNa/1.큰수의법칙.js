'use strict';
const [a, b] = require('fs').readFileSync('input.txt', 'utf8').split('\n');
function solution(num, arr) {
  let answer = 0;
  let sum = 0;
  let tmp = [];
  console.log(a);
  JSON.parse(a).forEach((element) => tmp.push(element));
  //   a.split(',').forEach((value) => tmp.push(Number(value)));
  console.log(typeof a);
  console.log(tmp);

  return answer;
}
console.log(solution([5, 8, 3], [2, 4, 5, 4, 6]));
