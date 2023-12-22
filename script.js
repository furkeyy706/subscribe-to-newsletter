function Subscribe() {
  var email = document.getElementById('email').value;
  var data = document.getElementById('email').value;
  localStorage.setItem('myData', data);

  var messageElement = document.getElementById('message');

  if (validateEmail(email)) {
    // e posta doğru formatta ise
    messageElement.style.color = '#4caf50';
    messageElement.textContent =
      'Your subscription has been completed successfully :)';

    //kullanıcıyı teşekkür sayfasına yonlendir
    setTimeout(function () {
      window.location.href = 'subs-result.html';
    }, 1000);
  } else {
    // e-posta yanlıs formatta ise
    messageElement.style.color = '#f44336';
    messageElement.textContent = 'please enter a valid email address';
  }
}

function validateEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
