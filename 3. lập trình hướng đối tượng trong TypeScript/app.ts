// Phạm vi truy cập trong class: 
// 1. private
// 2. protected
// 3. public
// 4. readonly
// Mặc định khi không khai báo thì là public


// tạo lớp con người
class ConNguoi{
    // thuộc tính họ tên
    public ho_ten: string;

    // thuộc tính tuổi
    public tuoi: number;

    // thuộc tính giới tính
    public gioi_tinh: boolean;

    // thuộc tính địa chỉ
    public dia_chi: string;

    // thuộc tính email
    public email: string;

    // hàm khởi tạo có tham số
    constructor(
        thamSo1: string,
        thamSo2: number,
        thamSo3: boolean,
        thamSo4: string,
        thamSo5: string
    )
    {
        this.ho_ten = thamSo1;
        this.tuoi = thamSo2;
        this.gioi_tinh = thamSo3;
        this.dia_chi = thamSo4;
        this.email = thamSo5;
    }

    // phương thức hiển thị
    public HienThi(): void{
        console.log(`[${this.ho_ten}, ${this.tuoi}, ${this.gioi_tinh}, ${this.dia_chi}, ${this.email}]`);
    }
}


// tạo đối tượng
let dt: ConNguoi = new ConNguoi("Nguyễn Văn A", 33, true, "Hà Nội", "nva@gmail.com");

dt.HienThi();