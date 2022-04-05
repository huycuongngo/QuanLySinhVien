

var layThongTinTuForm = () => {
  console.log("function lay thong tin tu form");

  var maSV = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var diemToan = document.getElementById("txtDiemToan").value;
  var diemLy = document.getElementById("txtDiemLy").value;
  var diemHoa = document.getElementById("txtDiemHoa").value;

  var sv = new SinhVien(maSV, ten, email, diemToan, diemLy, diemHoa);
  console.log("sinh vien", sv);

  return sv;
}


var renderDanhSachSinhVien = (danhSachSinhVienArr) => {
  var contentHTML = "";
  for (let i = 0; i < danhSachSinhVienArr.length; ++i) {
    var sinhVienHienTai = danhSachSinhVienArr[i];
    var contentTr = `<tr>
                        <td>${sinhVienHienTai.id}</td>
                        <td>${sinhVienHienTai.name}</td>
                        <td>${sinhVienHienTai.email}</td>
                        <td>0</td>
                        <td>
                          <button class="btn btn-success" onclick="suaSinhVien('${sinhVienHienTai.id}')">Sửa</button>
                          <button class="btn btn-danger" onclick="xoaSinhVien('${sinhVienHienTai.id}')">Xóa</button>
                        </td>
                        </tr>`;
    contentHTML += contentTr;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
};


var setLocalSV = function (arr) {
  var json = JSON.stringify(arr);
  localStorage.setItem(SINHVIEN_LOCAL, json);
};

var getLocalSV = function () {
  
}




