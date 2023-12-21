// const mobileMenu = document.querySelector('.mobile-menu');
// const menuBtnOpen = document.querySelector('.menu-btn-open');
// const menuBtnClose = document.querySelector('.menu-btn-close');

// const toggleMenu = () => mobileMenu.classList.toggle('is-open');

// menuBtnOpen.addEventListener('click', toggleMenu);
// menuBtnClose.addEventListener('click', toggleMenu);


/////////////


// function myFunction() {

//   document.querySelectorAll('.myDropdown').classList.toggle("show");
  

//   // document.getElementById("myDropdown").classList.toggle("show");
//   // document.getElementById("myMain").classList.toggle("hide");
// }

// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//       }
//     var main = document.getElementsByClassName("myMain");
//     for (i = 0; i < main.length; i++) {
//       var openDropdownMain = main[i];
//       if (openDropdownMain.classList.contains('hide')) {
//         openDropdownMain.classList.remove('hide');
//       }
//     }
//   }
// }


// function toggleDropdown(btnId) {
//   var dropdown = document.getElementById(btnId).nextElementSibling;
//   dropdown.classList.toggle("show");
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     for (var i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }


// Get all elements with class "dropbtn"
var dropButtons = document.querySelectorAll('.dropbtn');

// Add click event listeners to each button
dropButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Toggle the "close" class for the clicked button
    this.classList.toggle('close');
  });
});

////////////////////////

// var dropButtons = document.querySelectorAll('.dropbtn');
// var dropMain = document.querySelectorAll('.myMain');

dropButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the sibling element (dropdown) of the clicked button
    var dropdown = this.nextElementSibling;

    // Check if the dropdown exists
    if (dropdown) {
      // Toggle the "show" class for the associated dropdown
      dropdown.classList.toggle('show');

    }

  });
});

