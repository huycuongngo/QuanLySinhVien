
// 1 nơi duy nhất thêm sửa xóa

const SINHVIEN_LOCAL = "sinhVienLocal"
var danhSachSinhVienArr = [];

// getItem take data from local storage
var json = localStorage.getItem(SINHVIEN_LOCAL);
console.log("json", json);

// parse json -> array
if (json !== null) {
  danhSachSinhVienArr = JSON.parse(json);
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



  if (validatorSV) {
    danhSachSinhVienArr.push(newSinhVien);

    // stringify array -> json
    var dsJson = JSON.stringify(danhSachSinhVienArr);
    localStorage.setItem("sinhVienLocal", dsJson);

    console.log("dsJson", dsJson);

    renderDanhSachSinhVien(danhSachSinhVienArr);

    document.getElementById("formQLSV").reset();
  }
  console.log(danhSachSinhVienArr);
}

var kiemTraViTri = function (id) {
  return danhSachSinhVienArr.findIndex((sv) => {
    return sv.id == id;
  });
}


var xoaSinhVien = function (id) {
  let index =
    console.log("yes", id);

  if (kiemTraViTri(id) !== -1) {

    // nó chỉ lưu array mới xuống local storage, chứ ko có xóa trong local storage
    // phương thức splice này sẽ thay đổi phần tử trong danhSachSinhVienArr
    danhSachSinhVienArr.splice(index, 1);
    var json = JSON.stringify(danhSachSinhVienArr);
    localStorage.setItem(SINHVIEN_LOCAL, json);
    renderDanhSachSinhVien(danhSachSinhVienArr);
  }
};

var suaSinhVien = function (id) {
  var index = kiemTraViTri(id);
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




// cập nhật là sửa thông tin, render, và reset, lấy bỏ vào local storage
// sửa trên data của code, load lại trang thì render từ local storage
var capNhatSinhVien = function () {
  var id = document.getElementById("txtMaSV").value;
  var index = kiemTraViTri(id);
  if (index !== -1) {
    var sv = layThongTinTuForm();
    danhSachSinhVienArr[index] = sv;

    renderDanhSachSinhVien(danhSachSinhVienArr);
    document.getElementById("formQLSV").reset();
    document.getElementById("txtMaSV").disabled = false;

    setLocalSV(danhSachSinhVienArr, dsJson);
  }

  console.log(danhSachSinhVienArr);
}

// search
document.getElementById("txtSearch").addEventListener("keypress", () => {
  var keyword = document.getElementById("txtSearch").value.trim();
  console.log(keyword);
  var arrResult = danhSachSinhVienArr.filter(sv => {
    return sv.name.includes(keyword);
  })

  renderDanhSachSinhVien(arrResult);
});


var email = "ngohuycuong@gmail.com";
var regrex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var isEmailValid = string.match(email);























