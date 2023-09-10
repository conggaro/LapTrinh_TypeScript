// tạo lớp con người
class ConNguoi{
    // thuộc tính họ tên
    public ho_ten: string;

    // thuộc tính tuổi
    public tuoi: number;

    // thuộc tính giới tính
    public gioi_tinh: boolean;

    // hàm khởi tạo có tham số
    constructor(
        thamSo1: string,
        thamSo2: number,
        thamSo3: boolean
    )
    {
        this.ho_ten = thamSo1;
        this.tuoi = thamSo2;
        this.gioi_tinh = thamSo3;
    }

    // phương thức thông báo
    public ThongBao(): void{
        console.log("Đây là con người");
    }
}

// tạo lớp sinh viên
// kế thừa lớp con người
class SinhVien extends ConNguoi{
    // thuộc tính mã sinh viên
    public ma_SinhVien: string;

    // hàm khởi tạo có tham số
    constructor(
        thamSo1: string,
        thamSo2: number,
        thamSo3: boolean,
        thamSo4: string
    )
    {
        // gọi hàm khởi tạo của lớp cha
        super(thamSo1, thamSo2, thamSo3);

        this.ma_SinhVien = thamSo4;
    }

    // ghi đè phương thức thông báo
    public override ThongBao(): void {
        // nếu gõ như này
        // thì gọi được phương thức của lớp cha
        // super.ThongBao();

        console.log("Đây là sinh viên");
    }
}

// tạo đối tượng
let dt: SinhVien = new SinhVien(
    "Nguyễn Văn A",
    16,
    true,
    "SV001"
);

// gọi phương thức thông báo
dt.ThongBao();