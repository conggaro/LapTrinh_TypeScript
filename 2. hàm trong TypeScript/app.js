// hàm trả về kiểu dữ liệu number
function TinhTong(thamSo1, thamSo2) {
    return thamSo1 + thamSo2;
}
// gọi hàm tính tổng
var tong = TinhTong(5, 20);
console.log("5 + 20 =", tong);
// hàm trả về kiểu dữ liệu string
function ThongBao(noi_dung) {
    return "Th\u00F4ng b\u00E1o: ".concat(noi_dung);
}
// gọi hàm thông báo
console.log(ThongBao("Đây là TypeScript"));
// hàm trả về kiểu boolean
// ví dụ như hàm kiểm tra số chẵn
function KiemTra_SoChan(thamSo) {
    if (thamSo % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
// gọi hàm kiểm tra số chẵn
console.log("Kiểm tra:", KiemTra_SoChan(5) == true ? "5 là số chẵn." : "5 là số lẻ.");
// hàm không trả về gì cả
// đó là kiểu void
function XinChao() {
    console.log("Xin chào bạn nhé!");
}
// gọi hàm xin chào
XinChao();
// hàm trả về kiểu mảng (loại number)
// ví dụ hàm lấy số chẵn
function Lay_SoChan(thamSo) {
    // tạo mảng khởi tạo
    var khoi_tao = [];
    for (var i = 0; i < thamSo.length; i++) {
        if (thamSo[i] % 2 == 0) {
            khoi_tao.push(thamSo[i]);
        }
    }
    return khoi_tao;
}
// gọi hàm lấy số chẵn
var mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Lấy ra những số chẵn:", Lay_SoChan(mang));
// hàm trả về kiểu mảng (loại string)
// ví dụ hàm chuyển tất cả phần tử trong mảng về chữ thường
function Lay_ChuThuong(thamSo) {
    // tạo mảng khởi tạo
    var khoi_tao = [];
    for (var i = 0; i < thamSo.length; i++) {
        // dùng biến item để hứng dữ liệu chữ thường
        var item = thamSo[i].toLowerCase();
        // thêm phần tử vào trong mảng khởi tạo
        khoi_tao.push(item);
    }
    return khoi_tao;
}
// gọi hàm lấy chữ thường
var mang2 = [
    "Hà Nội",
    "HẢI PHÒNG",
    "đÀ nẴNG",
    "tP hỒ chÍ minH"
];
console.log("Lấy chữ thường:", Lay_ChuThuong(mang2));
