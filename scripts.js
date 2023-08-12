const inputPhone = document.querySelector('#phone')
const inputText = document.querySelector('#text')
const inputSubmit = document.querySelector('#submit')
const link = document.querySelector('#link')

inputPhone.addEventListener(`focus`, function () {
  inputPhone.style = 'border-bottom: 3px solid #16826b'
})

inputPhone.addEventListener('focusout', function () {
  inputPhone.style = 'border-bottom: 3px solid #fff'
})

inputText.addEventListener('focus', function () {
  inputText.style = 'border-bottom: 3px solid #16826b'
})

inputText.addEventListener('focusout', function () {
  inputText.style = 'border-bottom: 3px solid #fff'
})

inputSubmit.addEventListener('click', function () {
  handleSubmit()
})

function handleSubmit() {
  var phone = inputPhone.value
  var message = inputText.value

  if (phone.length > 10) {
    phone = phone.replace(/\D/g, '')

    if (message) {
      message = encodeURIComponent(message)
    } else {
      message = getSaudacao()
    }

    link.target = '_blank'
    link.href = `https://wa.me/send?phone=${phone}&text=${message}`
  } else {
    alert('Verifique o número de telefone digitado.')
    inputPhone.style = 'border-bottom: 3px solid #e53d30'
  }
}

function getSaudacao() {
  const date = new Date()
  const hour = date.getHours()

  if (hour >= 5 && hour <= 11) {
    return encodeURIComponent('Bom dia! É da THS Informática, tudo bem?')
  } else if (hour >= 12 && hour <= 17) {
    return encodeURIComponent('Boa tarde! É da THS Informática, tudo bem?')
  } else {
    return encodeURIComponent('Boa noite! É da THS Informática, tudo bem?')
  }
}
