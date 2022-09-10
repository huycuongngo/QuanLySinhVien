// 1 nơi duy nhất thêm sửa xóa
const SINHVIEN_LOCAL = "sinhVienLocal"

var danhSachSinhVienArr = getLocalSV(SINHVIEN_LOCAL);
if (danhSachSinhVienArr !== null) {
  renderDanhSachSinhVien(danhSachSinhVienArr);
}

var themSinhVien = () => {
  console.log("them sinh vien");
  var newSinhVien = layThongTinTuForm();

  var isValid = true;

  isValid = validatorSV.kiemtraRong(newSinhVien.name, "spanTenSV", "Tên sinh viên không được để rỗng") &
    validatorSV.kiemtraRong(newSinhVien.email, "spanEmailSV", "Email khong duoc de rong") &
    validatorSV.kiemtraRong(newSinhVien.toan, "spanToan", "Trường này không được rỗng") &
    validatorSV.kiemtraRong(newSinhVien.ly, "spanLy", "Trường này không được rỗng") &
    validatorSV.kiemtraRong(newSinhVien.hoa, "spanHoa", "Truong nay khong duoc rong") &
    validatorSV.kiemtraRong(newSinhVien.id, "spanMaSV", "Truong nay khong duoc rong");

  isValid = isValid && validatorSV.kiemTraTrungId(newSinhVien.id, danhSachSinhVienArr) &&
    validatorSV.kiemTraEmail(newSinhVien.email, "spanEmailSV")

  console.log("isValid", isValid);

  if (isValid) {
    danhSachSinhVienArr.push(newSinhVien);

    setLocalSV(danhSachSinhVienArr);

    renderDanhSachSinhVien(danhSachSinhVienArr);

    document.getElementById("formQLSV").reset();
    document.getElementById("searchForm").reset();
  }
  console.log(danhSachSinhVienArr);
}

var kiemTraViTri = function (id) {
  return danhSachSinhVienArr.findIndex((sv) => {
    return sv.id == id;
  });
}

var xoaSinhVien = function (id) {
  document.getElementById("spanMaSV").innerText = "";
  document.getElementById("searchForm").reset();
  let index = console.log("id xoa sinh vien", id);

  if (kiemTraViTri(id) !== -1) {
    // nó chỉ lưu array mới xuống local storage, ko xóa trong local storage
    // phương thức splice này sẽ thay đổi phần tử trong danhSachSinhVienArr
    danhSachSinhVienArr.splice(index, 1);
    var json = JSON.stringify(danhSachSinhVienArr);
    localStorage.setItem(SINHVIEN_LOCAL, json);
    renderDanhSachSinhVien(danhSachSinhVienArr);
  }
};

var suaSinhVien = function (id) {
  document.getElementById("spanMaSV").innerText = "";
  document.getElementById("searchForm").reset();
  var index = kiemTraViTri(id);
  console.log("id sua sinh vien", id);
  if (index !== -1) {
    var sv = danhSachSinhVienArr[index];
    console.log(sv);
  }
  document.getElementById("txtMaSV").value = sv.id;
  document.getElementById("txtTenSV").value = sv.name;
  document.getElementById("txtEmail").value = sv.email;
  document.getElementById("txtDiemToan").value = sv.toan;
  document.getElementById("txtDiemLy").value = sv.ly;
  document.getElementById("txtDiemHoa").value = sv.hoa;

  document.getElementById("txtMaSV").disabled = true;
};

// cập nhật: sửa thông tin, render, và reset, lưu xuống local storage
// sửa trên data của code, load lại trang thì render từ local storage
var capNhatSinhVien = function () {
  document.getElementById("spanMaSV").innerText = "";
  document.getElementById("searchForm").reset();
  var id = document.getElementById("txtMaSV").value;
  var index = kiemTraViTri(id);
  if (index !== -1) {
    var sv = layThongTinTuForm();
    danhSachSinhVienArr[index] = sv;

    renderDanhSachSinhVien(danhSachSinhVienArr);
    document.getElementById("formQLSV").reset();
    document.getElementById("searchForm").reset();
    document.getElementById("txtMaSV").disabled = false;

    setLocalSV(danhSachSinhVienArr);
  }

  console.log(danhSachSinhVienArr);
}

// search
var timSinhVien = function () {
  document.getElementById("spanMaSV").innerText = "";
  let value = document.getElementById("txtTimKiem").value.trim();
  console.log("tim kiem", value);
  sinhVienCanTim = danhSachSinhVienArr.filter(sv => sv.name.includes(value));
  console.log("sinhVienCanTim", sinhVienCanTim);
  if(sinhVienCanTim.length !== 0) 
    renderDanhSachSinhVien(sinhVienCanTim);
  else {
    document.getElementById("spanTimKiem").innerText = "Khong tim thay sinh vien!"
  }
}

var resetDanhSachSinhVien = function () {
  document.getElementById("spanMaSV").innerText = "";
  document.getElementById("searchForm").reset();
  renderDanhSachSinhVien(danhSachSinhVienArr);
}
