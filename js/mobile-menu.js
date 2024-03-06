const dropButtons = document.querySelectorAll('.dropbtn');
const dropMenus = document.querySelectorAll('.myDropdown');
const overlay = document.querySelector('.overlay')

dropButtons.forEach(function (button) {
  const dropMenu = button.nextElementSibling
  button.addEventListener('click', () => {
    if (!button.classList.contains('close')) {
      button.classList.add('close');
      dropMenu.classList.add('show');
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden'
    } else {
      button.classList.remove('close');
      dropMenu.classList.remove('show')
      overlay.style.display = 'none';
      document.body.style.overflow = ''
    }
  })
});

overlay.addEventListener('click', () => {
  dropButtons.forEach(button => {
    button.classList.remove('close')
  })
  dropMenus.forEach(menu => {
    menu.classList.remove('show')
  })
  overlay.style.display = 'none';
  document.body.style.overflow = '';
})
