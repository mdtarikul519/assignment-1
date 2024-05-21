function calculation(){
   let num1= parseFloat(document.getElementById("num1").value);
   let num2=parseFloat (document.getElementById("num2").value);
   let operation = document.getElementById('operation').value;

    if (isNaN(num1) ||isNaN(num2) ) {
        document.getElementById('result').innerHTML = 'Please enter valid numbers.';
        return ;
      }
    let result;
    switch(operation) {
      case 'addition':
        result = num1 + num2;
        break;
      case 'subtraction':
        result = num1 - num2;
        break;
      case 'multiplication':
        result = num1 * num2;
        break;
      case 'division':
        if (num2 === 0) {
          document.getElementById('result').innerHTML = 'Cannot divide by zero.';
          return;
        }
        result = num1 / num2;
        break;
      default:
        document.getElementById('result').innerHTML = alert('Please Select operation.');
        return;
    }

    document.getElementById('result').innerHTML = 'Result: ' + result;
  }


