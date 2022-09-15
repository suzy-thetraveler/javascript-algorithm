function solution(num, arr) {
  let answer = 0;
  let sum = 0;
  let tmp = [];
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i];
    for (let j = i + 1; j < i + num[1]; j++) {
      sum += arr[j];
    }
    if (sum > answer) answer = sum;
  }

  return answer;
}
console.log(solution([10, 3], [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
