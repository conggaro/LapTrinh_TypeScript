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

class ConNguoi{
    // tạo biến đếm
    private static dem: number = 0;

    // hàm khởi tạo có tham số
    // khai báo thuộc tính luôn ở trong hàm khởi tạo.
    constructor(
        private ho_ten: string,
        private tuoi: number,
        private gioi_tinh: boolean
    )
    {
        // khi bạn tạo 1 đối tượng
        // thì biến đếm sẽ được cộng 1
        ConNguoi.dem = ConNguoi.dem + 1;
    }

    // phương thức hiển thị
    public HienThi(): void{
        console.log(`[${this.ho_ten}, ${this.tuoi}, ${this.gioi_tinh}]`);
    }

    // phương thức static
    // giúp in ra số lượng đối tượng
    // đếm được
    public static InRa_SoLuong(): void{
        console.log(`Số lượng đối tượng đếm được là: ${ConNguoi.dem}`);
    }
}

// số lượng đối tượng ban đầu
// gọi phương thức in ra số lượng
console.log("Ban đầu:");
ConNguoi.InRa_SoLuong();

// tạo đối tượng
let dt1 = new ConNguoi(
    "Nguyễn Văn A",
    18,
    true
);

let dt2 = new ConNguoi(
    "Nguyễn Thị B",
    20,
    false
);

let dt3 = new ConNguoi(
    "Nguyễn Thị D",
    15,
    false
);

// gọi phương thức hiển thị
dt1.HienThi();
dt2.HienThi();
dt3.HienThi();

// số lượng đối tượng sau khi tạo
// gọi phương thức in ra số lượng
console.log("\nLúc sau:");
ConNguoi.InRa_SoLuong();