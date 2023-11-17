const getElement = id => document.getElementById(id);

function isValidEmail(email) {
  // Biểu thức chính quy để kiểm tra định dạng email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.addEventListener('DOMContentLoaded', function loginForm() {
  const email = getElement('email')
  const btnChange = getElement('valid-btn');

  email.addEventListener('input', function () {
    var inputValue = this.value.trim();
    var isValid = isValidEmail(inputValue) || inputValue === '';
    
    this.classList.toggle('invalid', !isValid);
    btnChange.classList.toggle('valid', isValid);

  });
});

document.addEventListener('DOMContentLoaded', function registForm() {
  var account = getElement('account');
  var password = getElement('password');
  var btnChange = getElement('valid-btn-regist');

  account.addEventListener('input', function () {

    var accountValue = this.value.trim();
    var passwordValue = password.value.trim();

    var validAccount = isValidEmail(accountValue) || accountValue === '';

    this.classList.toggle('invalid', !isValidEmail);
    btnChange.classList.toggle('valid', isValidEmail);

  });
});


document.addEventListener('DOMContentLoaded', function openAndCloseLoginForm() {

  const modal = getElement('modal_form');
  const modalBody = getElement('modal_form_body');
  const myLogin = getElement('login');
  const myRegist = getElement('regist');

  const setDisplayStyle = (element, displayValue) => element.style.display = displayValue;
  const block = element => setDisplayStyle(element, 'block');
  const none = element => setDisplayStyle(element, 'none');
  const addClass = (element, className, add) => element.classList.toggle(className, add);

  const toggleForm = (showElement, hideElement, add) => {
    event.preventDefault();
    modal.style.display = 'block';
    block(showElement);
    none(hideElement);
    addClass(modalBody, 'new-height', add);
  };

  // Thêm sự kiện click vào thẻ <a>

  // Mở form đăng nhập
  getElement('login_link').addEventListener('click', function () {
    toggleForm(myLogin, myRegist, false);
  });

  // Mở form đăng kí
  getElement('regist_link').addEventListener('click', function () {
    toggleForm(myRegist, myLogin, true);
  });

  // Chuyển hướng sang form đăng nhập
  getElement('direct-link-1').addEventListener('click', function () {
    toggleForm(myRegist, myLogin, true);
  });

  // Chuyển hướng sang form đăng kí
  getElement('direct-link-2').addEventListener('click', function () {
    toggleForm(myLogin, myRegist, false);
  });

  // Đóng form
  getElement('modal__body-id').addEventListener('click', function () {
    event.preventDefault();
    modal.style.display = 'none';
    addClass(modalBody, 'new-height', false);
  });
});