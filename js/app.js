// window.addEventListener('DOMContentLoaded', (event) => {
// Navbar shrink function
const navbarShrink = function () {
  const navbarCollapsible = document.body.querySelector('#mainNav')
  if (!navbarCollapsible) {
    return
  }
  if (window.scrollY === 0) {
    navbarCollapsible.classList.remove('navbar-shrink')
  } else {
    navbarCollapsible.classList.add('navbar-shrink')
  }
}

// Shrink the navbar
navbarShrink()

// Shrink the navbar when page is scrolled
document.addEventListener('scroll', navbarShrink)

// Activate Bootstrap scrollspy on the main nav element
// const mainNav = document.body.querySelector('#mainNav')
// if (mainNav) {
//   new bootstrap.ScrollSpy(document.body, {
//     target: '#mainNav',
//     offset: 72
//   })
// }

// Collapse responsive navbar when toggler is visible
const navbarToggler = document.body.querySelector('.navbar-toggler')
const responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'))
responsiveNavItems.map(function (responsiveNavItem) {
  responsiveNavItem.addEventListener('click', () => {
    if (window.getComputedStyle(navbarToggler).display !== 'none') {
      navbarToggler.click()
    }
  })
})
// })

const fullName = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const message = document.getElementById('message')
const btn = document.getElementById('submitButton')
btn.addEventListener('click', (e) => {
  e.preventDefault()
  if (fullName.value === '' && email.value === '' && phone.value === '' && message.value === '') {
    Swal.fire({
      title: 'Please fill out Full name, Email address, Phone number and Message before sending!',
      icon: 'warning'
    })
  } else if (fullName.value === '') {
    Swal.fire({
      title: 'Please fill out Full name field before sending',
      icon: 'warning'
    })
  } else if (email.value === '') {
    Swal.fire({
      title: 'Please fill out Email address field before sending',
      icon: 'warning'
    })
  } else if (phone.value === '') {
    Swal.fire({
      title: 'Please fill out Phone number field before sending',
      icon: 'warning'
    })
  } else if (message.value === '') {
    Swal.fire({
      title: 'Please fill out Message field before sending',
      icon: 'warning'
    })
  } else {
    Swal.fire({
      title: `Message successfully sent to: ${fullName.value}`,
      icon: 'success'
    })
  }
  fullName.value = '' 
  email.value = ''
  phone.value = ''
  message.value = ''
})
