function solution(array1, array2) {
  let answer = [];
  let tmp = [];
  for (let a of array1) tmp.push(a);
  for (let a of array2) tmp.push(a);
  answer = tmp.sort();
  return answer;
  // 다음에는 sort 없는 방법으로 풀어보기!
}
console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
