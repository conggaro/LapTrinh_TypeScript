// namesapce
// hay còn gọi là tên vùng không gian

// có tác dụng:
// 1. đặt tên class mà không sợ bị trùng từ khóa.
// 2. quản lý theo một nhóm gọi là "module" có hệ thống.

// chúng ta sẽ phải sử dụng
// từ khóa export
// export dịch ra tiếng việt là xuất ra


// tạo namespace có tên MyApp
module MyApp{
    // tạo lớp con người
    export class ConNguoi{
        // bạn có thể viết thuộc tính ở đây

        // bạn có thể viết hàm khởi tạo ở đây

        // phương thức thông báo
        public ThongBao(): void{
            console.log("MyApp: \"Đây là con người\"");
        }
    }

    // tạo lớp động vật
    export class DongVat{
        // phương thức thông báo
        public ThongBao(): void{
            console.log("MyApp: \"Đây là động vật\"");
        }
    }
}

// tạo namespace có tên Clone_MyApp
// bên trong Clone_MyApp
// thì có thể tạo class trùng tên với
// class của MyApp
module Clone_MyApp{
    // tạo lớp con người
    export class ConNguoi{
        // phương thức thông báo
        public ThongBao(): void{
            console.log("Clone_MyApp: \"Đây là con người\"");
        }
    }

    // tạo lớp động vật
    export class DongVat{
        // phương thức thông báo
        public ThongBao(): void{
            console.log("Clone_MyApp: \"Đây là động vật\"");
        }
    }
}

// tạo đối tượng
let dt1: MyApp.ConNguoi = new MyApp.ConNguoi();
let dt2: MyApp.DongVat = new MyApp.DongVat();

// gọi phương thức thông báo
dt1.ThongBao();
dt2.ThongBao();

// tạo đối tượng
let dt3: Clone_MyApp.ConNguoi = new Clone_MyApp.ConNguoi();
let dt4: Clone_MyApp.DongVat = new Clone_MyApp.DongVat();

// gọi phương thức thông báo
dt3.ThongBao();
dt4.ThongBao();