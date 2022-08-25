function solution(string) {
  let answer = '';
  let int = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      int++;
    } else {
      answer += string[i];
      if (int > 1) answer += int;
      int = 1;
    }
  }
  return answer;
}

console.log(solution('KKHSSSSSSSE'));
