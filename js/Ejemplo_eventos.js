'use strict'

//alert(typeof num1);

function btnSumar(){
    var num1 = document.getElementById('txtval1').value;
    var num2 = document.getElementById('txtval2').value;
    var suma = 0;
    suma = parseInt(num1)+parseInt(num2);
    document.form1.txtRes.value = suma;
}