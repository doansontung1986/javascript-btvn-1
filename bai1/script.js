/*
Bài 1: Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó

Ví dụ: calculateFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120
*/

const calculateFactorial = (number) => {
  if (number == 1) return 1;
  return number * calculateFactorial(number - 1);
};

console.log(calculateFactorial(5));
