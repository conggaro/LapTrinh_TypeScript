// Interface trong TypeScript
// thì có thể khai báo được cả property.

interface ConNguoi{
    // thuộc tính họ tên
    ho_ten: string;

    // thuộc tính tuổi
    tuoi: number;

    // thuộc tính biệt danh
    // biệt danh cho phép null
    biet_danh? : string;

    // thuộc tính giới tính
    gioi_tinh: boolean;

    // tạo phương thức nhập dữ liệu
    NhapDuLieu(): void;

    // tạo phương thức hiển thị
    HienThi(): void;
}

// tạo lớp sinh viên
// kế thừa interface con người
// nếu kế thừa interface
// thì bắt buộc phải triển khai phương thức
class SinhVien implements ConNguoi{
    // triển khai thuộc tính
    public ho_ten: string;
    public tuoi: number;
    public biet_danh? : string;
    public gioi_tinh: boolean;

    // thuộc tính mã sinh viên
    public ma_SinhVien: string;

    // hàm khởi tạo không tham số
    constructor()
    {
        this.ho_ten = "";
        this.tuoi = 0;
        this.biet_danh = null;
        this.gioi_tinh = false;
        this.ma_SinhVien = "";
    }

    // triển khai phương thức nhập dữ liệu
    public NhapDuLieu(): void {
        // viết code nhập dữ liệu
    }

    // triển khai phương thức hiển thị
    public HienThi(): void{
        console.log(`[${this.ho_ten}, ${this.tuoi}, ${this.biet_danh}, ${this.gioi_tinh}]`);
    }
}

// tạo đối tượng
let dt = new SinhVien();

// gọi phương thức hiển thị
dt.HienThi();