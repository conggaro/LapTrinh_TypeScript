# Lập trình TypeScript.
1. khai báo biến và kiểu dữ liệu.
2. hàm trong TypeScript.
3. lập trình hướng đối tượng trong TypeScript.
4. tính kế thừa.
5. tính đa hình _ cụ thể là ghi đè.
6. tính trừu tượng _ lớp trừu tượng _ phương thức trừu tượng.
7. biến static và hàm static.
8. interface trong lập trình hướng đối tượng TypeScript.
9. namespace trong TypeScript.
10. sử dụng Generic trong TypeScript.

# Chuyển string sang đối tượng "object"
<code>let jsonString = '{"name": "Hello Name", "age": 42}';
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
console.log(jsonObject.name);
console.log(jsonObject.age);
</code>

# Chuyển đối tượng sang string
<code>let obj = {name: "Hello Name", age: 42};
let jsonString = JSON.stringify(obj);
console.log(jsonString);
</code>

<br>
Lợi ích của việc chuyển object sang string<br>
rồi lại chuyển ngược string về object<br>
là tạo ra biến mới không tham chiếu đến dữ liệu cũ.

# Ép kiểu number sang string có format
<code>const number = 999999999;
const formattedNumber = number.toLocaleString('en-US', { style: 'decimal' });
console.log(formattedNumber); // Kết quả: '999,999,999'</code>

# Ép kiểu string có format sang kiểu number
<code>const formattedNumberString = '999,999,999';
const number = parseInt(formattedNumberString.replace(/,/g, ''));
console.log(number); // Kết quả: 999999999
console.log(typeof number); // Kết quả: 'number'</code>

# Kiểm tra 1 biến khác "null" hoặc "undefined"
<code>var x = null;
if (!!x) console.log("is not null");
else console.log("is null");</code>
<br><br>
<code>var x = undefined;
if (!!x) console.log("is not undefined");
else console.log("is undefined");</code>

# Tham chiếu trong Type Script và Java Script
<code>const a = [1, 2, 3];
a[0] = 99;
const b = a;
b[0] = 88;
console.log(a);    // Kết quả: a = [88, 2, 3]
console.log(b);    // Kết quả: b = [88, 2, 3]</code>

<br>
<code>const x = { name: "n v a", age: 30 };
x.name = "n v b";
const y = x;
y.name = "n v c";
console.log(x);    // Kết quả: x = { name: 'n v c', age: 30 }
console.log(y);    // Kết quả: y = { name: 'n v c', age: 30 }</code>

# Tạo đối tượng Date
<code>let date1 = new Date();
console.log(date1);

let date2 = new Date('2020-02-22T12:00:00');
console.log(date2);

let date3 = new Date(2004, 1, 31, 0, 0, 0);
console.log(date3);



let day = date1.getDay();
let month = date1.getMonth();
let year = date1.getFullYear();

let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();

console.log(`${day}/${month}/${year} ${hour}:${minute}:${second}`);</code>
