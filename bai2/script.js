/*
Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó

Ví dụ: reverseString(‘hello’) => olleh
*/

const reverseString = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
};

console.log(reverseString("hello"));
