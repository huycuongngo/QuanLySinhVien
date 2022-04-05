// module chỉ để định nghĩa
var validatorSV = {
  kiemtraRong: function (string, idErr, message) {
    let value = string.trim();
    if (value.length > 0) {
      document.getElementById(idErr).innerText = "";
      return true;
    } else {
      document.getElementById(idErr).innerText = message;
      return false;
    }
  },
  kiemTraTrungId(idNew, danhSachSinhVienArr) {
    var index = danhSachSinhVienArr.findIndex((sv) => {
      return sv.id === idNew;
    });
    if (index == -1) {
      document.getElementById("spanMaSV").innerText = "";
      return true;
    } else {
      document.getElementById("spanMaSV").innerText = "Ma sinh vien da ton tai"
      return false;
    }
  },
  kiemTraEmail() {
    // var regrex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // var isValid = regrex.test(string);
    
    var isValid = validatorSV.isEmail(string);
    
    console.log("email", isValid);

    // console.log(isValid);
    if (!isValid) {
      document.getElementById("idErr").innerText = "Email khong hop le"
      return false;
    }
    return true;
  },
};



















