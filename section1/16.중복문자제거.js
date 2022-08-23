function solution(string) {
  let answer;
  let tmp = '';
  for (let i = 0; i < string.length; i++) {
    if (tmp.includes(string.charAt(i))) continue;
    else tmp += string.charAt(i);
  }
  answer = tmp;

  return answer;
}

console.log(solution('ksekkset'));
