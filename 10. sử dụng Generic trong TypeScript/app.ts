// Generic:
// Hiểu một cách đơn giản
// là khai báo nhưng mà không cần chỉ ra kiểu dữ liệu.

// khi nào sử dụng
// thì mới định nghĩa kiểu dữ liệu.


// cho hàm thông báo 1
// trả về kiểu number
function ThongBao1(thamSo: number): number{
    return thamSo;
}

// gọi hàm thông báo 1
console.log("Thông báo 1:", ThongBao1(99));

// cho hàm thông báo 2
// trả về kiểu string
function ThongBao2(thamSo: string): string{
    return thamSo;
}

// gọi hàm thông báo 2
console.log("Thông báo 2:", ThongBao2("Welcome to TypeScript"));

// cho hàm thông báo 3
// trả về kiểu boolean
function ThongBao3(thamSo: boolean): boolean{
    return thamSo;
}

// gọi hàm thông báo 3
console.log("Thông báo 3:", ThongBao3(true));

// cho hàm thông báo 4
// trả về kiểu mảng loại number
function ThongBao4(thamSo: number[]): number[]{
    return thamSo;
}

// gọi hàm thông báo 4
console.log("Thông báo 4:", ThongBao4([1, 2, 3, 4, 5, 6]));

// cho hàm thông báo 5
// trả về kiểu mảng loại string
function ThongBao5(thamSo: string[]): string[]{
    return thamSo;
}

// gọi hàm thông báo 5
console.log("Thông báo 5:", ThongBao5(["abc", "def", "xyz"]));

// cho hàm thông báo 6
// trả về kiểu mảng loại boolean
function ThongBao6(thamSo: boolean[]): boolean[]{
    return thamSo;
}

// gọi hàm thông báo 6
console.log("Thông báo 6:", ThongBao6([true, false, false]));

// cho hàm thông báo 7
// trả về kiểu mảng loại bản ghi (tuple)
function ThongBao7(thamSo: [string, number, boolean][]): [string, number, boolean][]{
    return thamSo;
}

// gọi hàm thông báo 7
let mang_BanGhi: [string, number, boolean][] = [
    ["Nguyễn Văn A", 18, true],
    ["Nguyễn Thị B", 19, false],
    ["Nguyễn Văn C", 30, true],
    ["Nguyễn Thị D", 42, false]
];

console.log("Thông báo 7:", ThongBao7(mang_BanGhi));


// bây giờ tôi sẽ sử dụng generic
// cho hàm thông báo 8
function ThongBao8<T> (thamSo: T): T{
    return thamSo;
}

// gọi phương thức thông báo 8
console.log("Thông báo 8 (trả về kiểu string):", ThongBao8<string>("ok 123"));
console.log("Thông báo 8 (trả về kiểu number):", ThongBao8<number>(456));
console.log("Thông báo 8 (trả về kiểu boolean):", ThongBao8<boolean>(false));
console.log("Thông báo 8 (trả về kiểu bản ghi):", ThongBao8<[string, number, boolean]>(["Nguyễn Văn A", 32, true]));
console.log("Thông báo 8 (trả về kiểu mảng number):", ThongBao8<number[]>([1, 2, 3, 4, 5]));
console.log("Thông báo 8 (trả về kiểu mảng string):", ThongBao8<string[]>(["abc", "def", "jkl"]));
console.log("Thông báo 8 (trả về kiểu mảng boolean):", ThongBao8<boolean[]>([true, false, false]));
console.log("Thông báo 8 (trả về kiểu mảng bản ghi):", ThongBao8<[string, number, boolean][]>(mang_BanGhi));


// cái cú pháp generic
// nó có viết <T>
// thì đấy là khai báo T là generic
// những chữ T viết được ở đằng sau
// mà không báo lỗi
// vì bạn viết dòng code <T>


// cho hàm tĩnh (static)
// hàm tĩnh này sẽ khai báo 1 generic <T>
// nó sẽ trả về kiểu void
class SanPham{
    // hàm xem thông tin
    public static Xem_ThongTin<T> (thamSo: T[]): void{
        for(let i = 0; i < thamSo.length; i++){
            console.log(thamSo[i]);
        }
    }
}

// gọi hàm xem thông tin
console.log("\nGọi hàm (staic) xem thông tin:");
SanPham.Xem_ThongTin<string>(["MSI", "Asus", "Dell"]);

console.log("\nGọi hàm (staic) xem thông tin:");
SanPham.Xem_ThongTin<any>(["Apple", 998, false]);