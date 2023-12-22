var messageElement = document.getElementById('close-message');

function getData() {
  var data = localStorage.getItem('myData');
  document.getElementById('user-email').innerHTML = data;
}

function dismissMessage() {
  messageElement.style.color = '#4caf50';
  messageElement.textContent = 'You are directed to the home page';

  setTimeout(function () {
    window.location.href = 'index.html';
  }, 1000);
}
