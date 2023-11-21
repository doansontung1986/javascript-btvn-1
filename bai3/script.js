/*
Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào

Ví dụ: translate(‘VN’) => “Xin chào”
translate(‘EN’) => “Hello”
Gợi ý : Sử dụng switch - case . Học viên tự nghĩ ra 1 vài mã quốc gia và câu chào tương ứng với quốc gia đó
*/

const greeting = (countryCode) => {
  switch (countryCode) {
    case "VN":
      return "Xin chào";
    case "EN":
      return "Hello";
    case "JP":
      return "Konichiwa";
    case "FR":
      return "Bonjour";
    default:
      return "Mã quốc gia không hợp lệ";
  }
};

console.log(greeting("EN"));
