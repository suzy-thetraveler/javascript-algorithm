function solution(int, string) {
  let answer = [];

  // for (let a of string) {
  //   if (answer.includes(a)) continue;
  //   else answer.push(a);
  // }

  /**
   * filter를 사용하여
   * indexOf() 배열 중 가장 첫번째의 동일 요소를 가져오는 것과
   * 인덱스가 같다면 최초의 것으로 인식하고
   * 최초의 것들로만 filtered 되어 배열을 반환한다.
   */
  answer = string.filter((v, i) => {
    if (string.indexOf(v) === i) return v;
  });

  return answer;
}

console.log(solution(5, ['good', 'time', 'good', 'time', 'student']));
