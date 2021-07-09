let inputStr = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => (inputStr = chunk));

process.stdin.on('end', () => {
  const number = +inputStr;
  console.log(number * number);
});
