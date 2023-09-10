// 1. biến static
// nó có tác dụng khi bạn gọi 1 biến
// mà không phụ thuộc vào đối tượng
// đấy là cái hay của biến static.
// 2. hàm static
// nó có tác dụng khi bạn gọi 1 hàm
// mà không phụ thuộc vào đối tượng
// đấy là cái hay của biến static.
// biến static còn được gọi là biến tĩnh
// hàm static còn được gọi là hàm tĩnh
// viết chương trình
// khi bạn tạo 1 đối tượng
// thì biến static tự động tăng lên 1
// nó có ý nghĩa dùng để đếm số lượng đối tượng đấy
var ConNguoi = /** @class */ (function () {
    // hàm khởi tạo có tham số
    // khai báo thuộc tính luôn ở trong hàm khởi tạo.
    function ConNguoi(ho_ten, tuoi, gioi_tinh) {
        this.ho_ten = ho_ten;
        this.tuoi = tuoi;
        this.gioi_tinh = gioi_tinh;
        // khi bạn tạo 1 đối tượng
        // thì biến đếm sẽ được cộng 1
        ConNguoi.dem = ConNguoi.dem + 1;
    }
    // phương thức hiển thị
    ConNguoi.prototype.HienThi = function () {
        console.log("[".concat(this.ho_ten, ", ").concat(this.tuoi, ", ").concat(this.gioi_tinh, "]"));
    };
    // phương thức static
    // giúp in ra số lượng đối tượng
    // đếm được
    ConNguoi.InRa_SoLuong = function () {
        console.log("S\u1ED1 l\u01B0\u1EE3ng \u0111\u1ED1i t\u01B0\u1EE3ng \u0111\u1EBFm \u0111\u01B0\u1EE3c l\u00E0: ".concat(ConNguoi.dem));
    };
    // tạo biến đếm
    ConNguoi.dem = 0;
    return ConNguoi;
}());
// số lượng đối tượng ban đầu
// gọi phương thức in ra số lượng
console.log("Ban đầu:");
ConNguoi.InRa_SoLuong();
// tạo đối tượng
var dt1 = new ConNguoi("Nguyễn Văn A", 18, true);
var dt2 = new ConNguoi("Nguyễn Thị B", 20, false);
var dt3 = new ConNguoi("Nguyễn Thị D", 15, false);
// gọi phương thức hiển thị
dt1.HienThi();
dt2.HienThi();
dt3.HienThi();
// số lượng đối tượng sau khi tạo
// gọi phương thức in ra số lượng
console.log("\nLúc sau:");
ConNguoi.InRa_SoLuong();
