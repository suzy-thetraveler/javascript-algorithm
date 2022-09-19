'use strict';
const [a, b] = require('fs').readFileSync('input.txt', 'utf8').split('\n');
const [n, m, k] = JSON.parse(a),
  arr = JSON.parse(b);

function solution(num, arr) {
  arr.sort((a, b) => b - a);
  let answer = 0;
  let sum = arr[0] * k + arr[1];

  answer += sum * Math.floor(m / (k + 1));
  answer += arr[1] * (m % (k + 1));

  return answer;
}
console.log(solution([5, 8, 3], [2, 4, 5, 4, 6]));
