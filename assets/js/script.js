document.getElementById('decreaseBtn').addEventListener('click', function() {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value);
    if (!isNaN(currentValue) && currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });

  document.getElementById('increaseBtn').addEventListener('click', function() {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value);
    if (!isNaN(currentValue)) {
      quantityInput.value = currentValue + 1;
    }
  });

  