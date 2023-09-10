// lớp trừu tượng:
// 1. thường được sử dụng
// để định nghĩa hành vi chung
// cho các lớp dẫn xuất mở rộng.

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
abstract class HinhHoc {
    // phương thức trừu tượng tính chu vi
    public abstract Tinh_ChuVi(): number;

    // phương thức trừu tượng tính diện tích
    public abstract Tinh_DienTich(): number;

    // hàm khởi tạo không tham số
    constructor()
    {
        // không viết gì hết
    }
}

// tạo lớp hình vuông
// kế thừa lớp hình học
class HinhVuong extends HinhHoc{
    // trong TypeScript còn có kiểu
    // khai báo thuộc tính trong constructor luôn
    // rất thú vị

    // hàm khởi tạo có tham số
    public constructor(
        private chieu_dai: number,
        private chieu_rong: number
    )
    {
        // gọi super() cho nó đúng cú pháp thôi
        // gọi cho nó đỡ báo lỗi thôi
        // chứ super() cũng không làm công việc gì hết
        super();
    }

    // triển khai phương thức tính chu vi
    public Tinh_ChuVi(): number {
        return (this.chieu_dai + this.chieu_rong) * 2;
    }

    // triển khai phương thức tính diện tích
    public Tinh_DienTich(): number {
        return this.chieu_dai * this.chieu_rong;
    }
}

// tạo lớp hình chữ nhật
class HinhChuNhat extends HinhHoc{
    // hàm khởi tạo có tham số
    // và nó khai báo thuộc tính
    // cho cái lớp hình chữ nhật luôn
    constructor(
        private chieu_dai: number,
        private chieu_rong: number
    )
    {
        super();
    }

    // triển khai phương thức tính chu vi
    public Tinh_ChuVi(): number {
        return (this.chieu_dai + this.chieu_rong) * 2;
    }

    // triển khai phương thức tính diện tích
    public Tinh_DienTich(): number {
        return this.chieu_dai * this.chieu_rong;
    }
}

// tạo đối tượng hình vuông
let dt_HinhVuong = new HinhVuong(5, 5);

// gọi phương thức tính chu vi
console.log("Chu vi hình vuông:", dt_HinhVuong.Tinh_ChuVi());

// gọi phương thức tính diện tích
console.log("Diện tích hình vuông:", dt_HinhVuong.Tinh_DienTich());

// tạo đối tượng hình chữ nhật
let dt_HinhChuNhat = new HinhChuNhat(10, 20);

// gọi phương thức tính chu vi
console.log("Chu vi hình chữ nhật:", dt_HinhChuNhat.Tinh_ChuVi());

// gọi phương thức tính diện tích
console.log("Diện tích hình chữ nhật:", dt_HinhChuNhat.Tinh_DienTich());