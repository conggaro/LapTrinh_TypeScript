// namesapce
// hay còn gọi là tên vùng không gian
// có tác dụng:
// 1. đặt tên class mà không sợ bị trùng từ khóa.
// 2. quản lý theo một nhóm gọi là "module" có hệ thống.
// chúng ta sẽ phải sử dụng
// từ khóa export
// export dịch ra tiếng việt là xuất ra
// tạo namespace có tên MyApp
var MyApp;
(function (MyApp) {
    // tạo lớp con người
    var ConNguoi = /** @class */ (function () {
        function ConNguoi() {
        }
        // bạn có thể viết thuộc tính ở đây
        // bạn có thể viết hàm khởi tạo ở đây
        // phương thức thông báo
        ConNguoi.prototype.ThongBao = function () {
            console.log("MyApp: \"Đây là con người\"");
        };
        return ConNguoi;
    }());
    MyApp.ConNguoi = ConNguoi;
    // tạo lớp động vật
    var DongVat = /** @class */ (function () {
        function DongVat() {
        }
        // phương thức thông báo
        DongVat.prototype.ThongBao = function () {
            console.log("MyApp: \"Đây là động vật\"");
        };
        return DongVat;
    }());
    MyApp.DongVat = DongVat;
})(MyApp || (MyApp = {}));
// tạo namespace có tên Clone_MyApp
// bên trong Clone_MyApp
// thì có thể tạo class trùng tên với
// class của MyApp
var Clone_MyApp;
(function (Clone_MyApp) {
    // tạo lớp con người
    var ConNguoi = /** @class */ (function () {
        function ConNguoi() {
        }
        // phương thức thông báo
        ConNguoi.prototype.ThongBao = function () {
            console.log("Clone_MyApp: \"Đây là con người\"");
        };
        return ConNguoi;
    }());
    Clone_MyApp.ConNguoi = ConNguoi;
    // tạo lớp động vật
    var DongVat = /** @class */ (function () {
        function DongVat() {
        }
        // phương thức thông báo
        DongVat.prototype.ThongBao = function () {
            console.log("Clone_MyApp: \"Đây là động vật\"");
        };
        return DongVat;
    }());
    Clone_MyApp.DongVat = DongVat;
})(Clone_MyApp || (Clone_MyApp = {}));
// tạo đối tượng
var dt1 = new MyApp.ConNguoi();
var dt2 = new MyApp.DongVat();
// gọi phương thức thông báo
dt1.ThongBao();
dt2.ThongBao();
// tạo đối tượng
var dt3 = new Clone_MyApp.ConNguoi();
var dt4 = new Clone_MyApp.DongVat();
// gọi phương thức thông báo
dt3.ThongBao();
dt4.ThongBao();
