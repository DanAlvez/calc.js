window.onload = function () {
  form = document.querySelector('form')

  function calc(event) {
    event.preventDefault()

    n1 = parseInt(document.querySelector('#n1').value)
    n2 = parseInt(document.querySelector('#n2').value)
    op = document.querySelector('#op').value

    result = document.querySelector('.res p')

    if (op == 'addition') {
      res = n1 + n2
      res = `${n1} + ${n2} = ${res}`
    } else if (op == 'subtraction') {
      res = n1 - n2
      res = `${n1} - ${n2} = ${res}`
    } else if (op == 'multiplication') {
      res = n1 * n2
      res = `${n1} * ${n2} = ${res}`
    } else {
      res = n1 / n2
      res = `${n1} / ${n2} = ${res}`
    }
    
    result.textContent = res
  }

  form.addEventListener('submit', calc)
}
