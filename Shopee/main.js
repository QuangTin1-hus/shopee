document.addEventListener('DOMContentLoaded', function loginForm() {
  var phoneNumberInput = document.getElementById('phoneNumber');
  var btnChange = document.getElementById('valid-btn');
  phoneNumberInput.addEventListener('input', function () {
    // Sử dụng biểu thức chính quy để kiểm tra xem có kí tự khác số không
    var inputValue = this.value.trim();
    if (/^\d{10}$/.test(inputValue) || inputValue === '') {
      this.classList.remove('invalid');
      btnChange.classList.add('valid');
    } else {
      this.classList.add('invalid');
      btnChange.classList.remove('valid');
    }
  });
});


document.addEventListener('DOMContentLoaded', function openAndCloseLoginForm() {
  var modal = document.getElementById('modal_form');
  var outForm = document.getElementById('modal__body-id');
  var modalBody = document.getElementById('modal_form_body');
  var openLogin = document.getElementById('login_link');
  var openRegist = document.getElementById('regist_link');
  var myLogin = document.getElementById('login');
  var myRegist = document.getElementById('regist')
  var regist = document.getElementById('direct-link-1');
  var login = document.getElementById('direct-link-2');
  // Thêm sự kiện click vào thẻ <a>

  //Mở form đăng kí
  openLogin.addEventListener('click', function () {
    event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
    modal.style.display = 'block';
    myRegist.style.display = 'none';
    modalBody.classList.remove('new-height');
  });

  //Mở form đăng nhập
  openRegist.addEventListener('click', function () {
    event.preventDefault();
    modal.style.display = 'block';
    myLogin.style.display = 'none';
    modalBody.classList.add('new-height');
  });

  //Chuyển hướng sang form đăng nhập
  regist.addEventListener('click', function () {
    event.preventDefault();
    modal.style.display = 'block';
    myLogin.style.display = 'none';
    myRegist.style.display = 'block';
    modalBody.classList.add('new-height');
  });

  //Chuyển hướng sang form đăng kí
  login.addEventListener('click', function () {
    event.preventDefault();
    modal.style.display = 'block';
    myLogin.style.display = 'block';
    myRegist.style.display = 'none';
    modalBody.classList.remove('new-height');
  });

  //Đóng form
  outForm.addEventListener('click', function () {
    event.preventDefault();
    modal.style.display = 'none';
    myRegist.style.display = 'block';
    myLogin.style.display = 'block';
    modalBody.classList.remove('new-height');
  });

});