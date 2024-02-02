function appendToResult(value) {
    document.getElementById('result').value += value;
  }

  function clearResult() {
    document.getElementById('result').value = '';
  }

  function calculateResult() {
    try {
      document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (error) {
      document.getElementById('result').value = 'ERROR';
    }
  }

  document.addEventListener('keydown', function(event) {
    if ((event.key >= '0' && event.key <= '9') || event.key === '.' || event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
      appendToResult(event.key); 
  }
    else if (event.key === 'Backspace') {
      clearResult();
    }
    
    else if (event.key === 'Enter') {
      event.preventDefault(); 
      calculateResult();
    }
  });
