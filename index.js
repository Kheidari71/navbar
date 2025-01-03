
// const menu = document.querySelector(".navList");
// const hamburgerMenu = document.querySelector(".hamburger-menu")
// console.log(hamburgerMenu)
// hamburgerMenu.addEventListener("click" , ()=>{
//     console.log("hello")
//   menu.classList.toggle("show")
// })

// // Select all navigation items
// const navItems = document.querySelectorAll(".navItem");

// // Add click event listener to each nav item
// navItems.forEach((navItem) => {
//   const dropdownMenu = navItem.querySelector(".dropdown-menu");

//   navItem.addEventListener("click", (event) => {
//     event.stopPropagation(); // Prevent the event from bubbling to the document

//     // Close all other dropdown menus
//     document.querySelectorAll(".dropdown-menu").forEach((menu) => {
//       if (menu !== dropdownMenu) {
//         menu.classList.remove("active");
//       }
//     });

//     // Toggle the current dropdown menu
//     dropdownMenu.classList.toggle("active");
//   });
// });

// // Close dropdowns when clicking outside of nav
// document.addEventListener("click", () => {
//   document.querySelectorAll(".dropdown-menu").forEach((menu) => {
//     menu.classList.remove("active");
//   });
// });

const hamburgr = document.querySelector(".hamburger-menu")
const navbar = document.querySelector(".navbar");
console.log(navbar);

hamburgr.addEventListener("click", () => {
  navbar.classList.toggle("active")
})

const navItems = document.querySelectorAll(".navitem")
console.log(navItems);

navItems.forEach((navItem) => {
  const dropdownMenu = navItem.querySelector(".dropdown-menu");
  console.log(dropdownMenu);
  
  navItem.addEventListener("click", (event) => {
    event.stopPropagation();// Prevent the 
    // event from bubbling to the document
    // Close all other dropdown menus
    console.log("heyyy");
    
    document.querySelectorAll(".dropdown-menu").forEach((menu)=>{
      if (menu !== dropdownMenu){
        menu.classList.remove("show")
      }
    });

dropdownMenu.classList.toggle("show")

  })
})

document.addEventListener("click", ()=>{
  document.querySelectorAll(".dropdown-menu").forEach((menu)=>{
    menu.classList.remove("show")
  })
})






