function solution(string) {
  let answer = '';
  //   let tmp = string.split('');
  //   for (let a of tmp) {
  //     if (Number.isInteger(Number.parseInt(a))) answer += a;
  //     else continue;
  //   }
  //   answer = Number.parseInt(answer);

  /**
   * 위의 방법도 괜찮지만
   * string 또한 for of 문을 쓸 수 있기에 split 할 필요가 없다.
   */
  for (let s of string) {
    if (!isNaN(s)) answer += s;
  }
  answer = parseInt(answer);
  return answer;
}

console.log(solution('g0en2T0s8eSoft'));
