function add(){
  
    let firstNumber = document.getElementById('firstnumber').value
    let secondNumber = document.getElementById('secondnumber').value
   
    let res = parseInt(firstNumber) + parseInt(secondNumber)

    document.getElementById('result').innerHTML = 

      ` ${firstNumber} + ${secondNumber} = ${res}`
}