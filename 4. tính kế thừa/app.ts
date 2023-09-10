// tạo lớp con người
class ConNguoi{
    // thuộc tính họ tên
    public ho_ten: string;

    // thuộc tính tuổi
    public tuoi: number;

    // thuộc tính giới tính
    public gioi_tinh: boolean;

    // hàm khởi tạo có tham số
    public constructor(
        thamSo1: string,
        thamSo2: number,
        thamSo3: boolean
    )
    {
        this.ho_ten = thamSo1,
        this.tuoi = thamSo2,
        this.gioi_tinh = thamSo3
    }

    // phương thức thông báo con người
    public ThongBao(): void{
        console.log("Đây là con người.");
    }
}

// tạo lớp sinh viên
// kế thừa lớp con người
class SinhVien extends ConNguoi{
    // lớp sinh viên
    // thì có thêm thuộc tính mã sinh viên
    public ma_SinhVien: string;

    // hàm khởi tạo có tham số
    public constructor(
        thamSo1: string,
        thamSo2: number,
        thamSo3: boolean,
        thamSo4: string
    )
    {
        // gọi hàm khởi tạo của lớp cha
        // tức là lớp con người
        // thì dùng từ khóa super
        super(thamSo1, thamSo2, thamSo3);

        this.ma_SinhVien = thamSo4;
    }

    // phương thức hiển thị
    HienThi(): void{
        console.log(`[${this.ho_ten}, ${this.tuoi}, ${this.gioi_tinh}, ${this.ma_SinhVien}]`);
    }
}

// tạo đối tượng
let dt: SinhVien = new SinhVien("Nguyễn Văn A", 18, true, "SV001");

// gọi phương thức hiển thị
dt.HienThi();

// gọi phương thức thông báo
dt.ThongBao();