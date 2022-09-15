function solution(arr1, arr2) {
  let answer = [];
  let tmp = new Set();

  for (let a of arr1) {
    if (tmp.has(a)) answer.push(a);
    tmp.add(a);
  }
  for (let a of arr2) {
    if (tmp.has(a)) answer.push(a);
    tmp.add(a);
  }

  return answer;
}
console.log(solution([1, 3, 9, 5, 2], [2, 3, 5, 7, 8]));
