document.getElementById('bogo-form').addEventListener('change', function (e) {
    const selectedOption = document.querySelector('input[name="unit-selection"]:checked');
    const totalPrice = selectedOption ? selectedOption.dataset.price : 0;
  
    document.getElementById('total-price').textContent = parseFloat(totalPrice).toFixed(2);
  });
  
  document.getElementById('bogo-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Added to cart!');
  });