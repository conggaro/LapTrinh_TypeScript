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
// tạo lớp con người
var ConNguoi = /** @class */ (function () {
    // hàm khởi tạo có tham số
    function ConNguoi(thamSo1, thamSo2, thamSo3) {
        this.ho_ten = thamSo1,
            this.tuoi = thamSo2,
            this.gioi_tinh = thamSo3;
    }
    // phương thức thông báo con người
    ConNguoi.prototype.ThongBao = function () {
        console.log("Đây là con người.");
    };
    return ConNguoi;
}());
// tạo lớp sinh viên
// kế thừa lớp con người
var SinhVien = /** @class */ (function (_super) {
    __extends(SinhVien, _super);
    // hàm khởi tạo có tham số
    function SinhVien(thamSo1, thamSo2, thamSo3, thamSo4) {
        var _this = 
        // gọi hàm khởi tạo của lớp cha
        // tức là lớp con người
        // thì dùng từ khóa super
        _super.call(this, thamSo1, thamSo2, thamSo3) || this;
        _this.ma_SinhVien = thamSo4;
        return _this;
    }
    // phương thức hiển thị
    SinhVien.prototype.HienThi = function () {
        console.log("[".concat(this.ho_ten, ", ").concat(this.tuoi, ", ").concat(this.gioi_tinh, ", ").concat(this.ma_SinhVien, "]"));
    };
    return SinhVien;
}(ConNguoi));
// tạo đối tượng
var dt = new SinhVien("Nguyễn Văn A", 18, true, "SV001");
// gọi phương thức hiển thị
dt.HienThi();
// gọi phương thức thông báo
dt.ThongBao();
