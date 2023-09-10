// Phạm vi truy cập trong class: 
// 1. private
// 2. protected
// 3. public
// 4. readonly
// Mặc định khi không khai báo thì là public
// tạo lớp con người
var ConNguoi = /** @class */ (function () {
    // hàm khởi tạo có tham số
    function ConNguoi(thamSo1, thamSo2, thamSo3, thamSo4, thamSo5) {
        this.ho_ten = thamSo1;
        this.tuoi = thamSo2;
        this.gioi_tinh = thamSo3;
        this.dia_chi = thamSo4;
        this.email = thamSo5;
    }
    // phương thức hiển thị
    ConNguoi.prototype.HienThi = function () {
        console.log("[".concat(this.ho_ten, ", ").concat(this.tuoi, ", ").concat(this.gioi_tinh, ", ").concat(this.dia_chi, ", ").concat(this.email, "]"));
    };
    return ConNguoi;
}());
// tạo đối tượng
var dt = new ConNguoi("Nguyễn Văn A", 33, true, "Hà Nội", "nva@gmail.com");
dt.HienThi();
