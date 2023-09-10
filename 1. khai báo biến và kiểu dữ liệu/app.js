// câu lệnh để biên dịch TypeScript thành JavaScript
// tsc tên_file --watch
// kiểu dữ liệu number
var bien1 = 100;
console.log("Đây là kiểu dữ liệu số:", bien1);
// kiểu dữ liệu string
var bien2 = "Nguyễn Văn A";
console.log("Đây là kiểu dữ liệu chuỗi:", bien2);
// kiểu dữ liệu logic
var bien3 = true;
console.log("Đây là kiểu dữ liệu logic:", bien3);
// kiểu dữ liệu mảng
// chứa toàn number
var mang1 = [1, 3, 5, 7, 9];
console.log("Đây là kiểu dữ liệu mảng (number):", mang1);
// kiểu dữ liệu mảng
// chứa toàn string
var mang2 = ["Xin chào", "Đây là TypeScript", "Rất vui được gặp bạn"];
console.log("Đây là kiểu dữ liệu mảng (string):", mang2);
// kiểu dữ liệu mảng
// chứa toàn boolean
var mang3 = [true, false, true];
console.log("Đây là kiểu dữ liệu mảng (boolean):", mang3);
// tạo kiểu dữ liệu enum
// hay còn gọi là kiểu dữ liệu liệt kê
var MauSac;
(function (MauSac) {
    MauSac[MauSac["Red"] = 0] = "Red";
    MauSac[MauSac["Green"] = 1] = "Green";
    MauSac[MauSac["Blue"] = 2] = "Blue";
})(MauSac || (MauSac = {}));
var mau_sac_1 = MauSac.Red;
var mau_sac_2 = MauSac.Green;
var mau_sac_3 = MauSac.Blue;
console.log("In ra màu sắc 1 (enum):", mau_sac_1);
console.log("In ra màu sắc 2 (enum):", mau_sac_2);
console.log("In ra màu sắc 3 (enum):", mau_sac_3);
// kiểu dữ liệu hỗn hợp
// hay còn gọi là kiểu dữ liệu bản ghi (tuple)
var ban_ghi;
ban_ghi = ["Nguyễn Văn A", 35, true];
console.log("Kiểu dữ liệu bản ghi:", ban_ghi);
console.log("Họ tên:", ban_ghi[0]);
console.log("Tuổi:", ban_ghi[1]);
console.log("Giới tính:", ban_ghi[2] == true ? "Nam" : "Nữ");
// kiểu dữ liệu any
// any là kiểu dữ liệu cho phép bạn gán giá trị bất kì vào biến
// từ "any" dịch ra tiếng Việt là "bất kỳ"
// tạo biến có tên là biến bất kỳ
var bien_BatKy_1 = 100;
var bien_BatKy_2 = "Welcome to TypeScript";
var bien_BatKy_3 = false;
var bien_BatKy_4 = [2, 4, 6, 8, 10];
var bien_BatKy_5 = ["ABC", "DEF", "XYZ"];
var bien_BatKy_6 = ["Nguyễn Văn A", 28, true, "Hà Nội", "nva@gmail.com"];
console.log("Biến bất kỳ 1:", bien_BatKy_1);
console.log("Biến bất kỳ 2:", bien_BatKy_2);
console.log("Biến bất kỳ 3:", bien_BatKy_3);
console.log("Biến bất kỳ 4:", bien_BatKy_4);
console.log("Biến bất kỳ 5:", bien_BatKy_5);
console.log("Biến bất kỳ 6:", bien_BatKy_6);
