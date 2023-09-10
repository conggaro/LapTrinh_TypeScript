// lớp trừu tượng:
// 1. thường được sử dụng
// để định nghĩa hành vi chung
// cho các lớp dẫn xuất mở rộng.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 2. lớp trừu tượng chứa 1 hoặc nhiều
// phương thức trừu tượng
// 3. phương thức trừu tượng (abstract method)
// thì không viết định nghĩa bên trong.
// 4. phương thức trừu tượng phải triển khai
// trong lớp dẫn xuất.
// mọi người hay gọi là implement đấy
// 5. bạn không thể tạo đối tượng
// từ lớp trừu tượng.
// tạo lớp trừu tượng hình học
var HinhHoc = /** @class */ (function () {
    // hàm khởi tạo không tham số
    function HinhHoc() {
        // không viết gì hết
    }
    return HinhHoc;
}());
// tạo lớp hình vuông
// kế thừa lớp hình học
var HinhVuong = /** @class */ (function (_super) {
    __extends(HinhVuong, _super);
    // trong TypeScript còn có kiểu
    // khai báo thuộc tính trong constructor luôn
    // rất thú vị
    // hàm khởi tạo có tham số
    function HinhVuong(chieu_dai, chieu_rong) {
        var _this = 
        // gọi super() cho nó đúng cú pháp thôi
        // gọi cho nó đỡ báo lỗi thôi
        // chứ super() cũng không làm công việc gì hết
        _super.call(this) || this;
        _this.chieu_dai = chieu_dai;
        _this.chieu_rong = chieu_rong;
        return _this;
    }
    // triển khai phương thức tính chu vi
    HinhVuong.prototype.Tinh_ChuVi = function () {
        return (this.chieu_dai + this.chieu_rong) * 2;
    };
    // triển khai phương thức tính diện tích
    HinhVuong.prototype.Tinh_DienTich = function () {
        return this.chieu_dai * this.chieu_rong;
    };
    return HinhVuong;
}(HinhHoc));
// tạo lớp hình chữ nhật
var HinhChuNhat = /** @class */ (function (_super) {
    __extends(HinhChuNhat, _super);
    // hàm khởi tạo có tham số
    // và nó khai báo thuộc tính
    // cho cái lớp hình chữ nhật luôn
    function HinhChuNhat(chieu_dai, chieu_rong) {
        var _this = _super.call(this) || this;
        _this.chieu_dai = chieu_dai;
        _this.chieu_rong = chieu_rong;
        return _this;
    }
    // triển khai phương thức tính chu vi
    HinhChuNhat.prototype.Tinh_ChuVi = function () {
        return (this.chieu_dai + this.chieu_rong) * 2;
    };
    // triển khai phương thức tính diện tích
    HinhChuNhat.prototype.Tinh_DienTich = function () {
        return this.chieu_dai * this.chieu_rong;
    };
    return HinhChuNhat;
}(HinhHoc));
// tạo đối tượng hình vuông
var dt_HinhVuong = new HinhVuong(5, 5);
// gọi phương thức tính chu vi
console.log("Chu vi hình vuông:", dt_HinhVuong.Tinh_ChuVi());
// gọi phương thức tính diện tích
console.log("Diện tích hình vuông:", dt_HinhVuong.Tinh_DienTich());
// tạo đối tượng hình chữ nhật
var dt_HinhChuNhat = new HinhChuNhat(10, 20);
// gọi phương thức tính chu vi
console.log("Chu vi hình chữ nhật:", dt_HinhChuNhat.Tinh_ChuVi());
// gọi phương thức tính diện tích
console.log("Diện tích hình chữ nhật:", dt_HinhChuNhat.Tinh_DienTich());
