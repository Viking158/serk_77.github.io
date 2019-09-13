
  document.getElementById('order-button').onclick = function() {
    document.getElementById('order-form').style.display = 'block';
    document.getElementById('gray').style.display = 'block';
  }

  document.getElementById('gray').onclick = function() {
      document.getElementById('order-form').style.display = 'none';
      document.getElementById('gray').style.display = 'none';
    }

  document.getElementById('close').onclick = function() {
      document.getElementById('order-form').style.display = 'none';
      document.getElementById('gray').style.display = 'none';
      }
