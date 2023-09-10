// Interface trong TypeScript
// thì có thể khai báo được cả property.
// tạo lớp sinh viên
// kế thừa interface con người
// nếu kế thừa interface
// thì bắt buộc phải triển khai phương thức
var SinhVien = /** @class */ (function () {
    // hàm khởi tạo không tham số
    function SinhVien() {
        this.ho_ten = "";
        this.tuoi = 0;
        this.biet_danh = null;
        this.gioi_tinh = false;
        this.ma_SinhVien = "";
    }
    // triển khai phương thức nhập dữ liệu
    SinhVien.prototype.NhapDuLieu = function () {
        // viết code nhập dữ liệu
    };
    // triển khai phương thức hiển thị
    SinhVien.prototype.HienThi = function () {
        console.log("[".concat(this.ho_ten, ", ").concat(this.tuoi, ", ").concat(this.biet_danh, ", ").concat(this.gioi_tinh, "]"));
    };
    return SinhVien;
}());
// tạo đối tượng
var dt = new SinhVien();
// gọi phương thức hiển thị
dt.HienThi();
