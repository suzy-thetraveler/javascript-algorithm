function solution(string, char) {
  let answer = [];
  let tmp = 0;
  for (let a of string) {
    if (a !== char) tmp++;
    else tmp = 0;
    answer.push(tmp);
  }
  tmp = 0;
  for (let i = string.length - 1; i >= 0; i--) {
    if (string.charAt(i) !== char) tmp++;
    else tmp = 0;
    if (answer[i] > tmp) answer[i] = tmp;
  }
  return answer;
}

console.log(solution('teachermode', 'e'));
