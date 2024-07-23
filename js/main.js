const openSidebar = document.querySelector(".navbar__burger")
const sidebar = document.querySelector(".navbar__sidebar")
const closeSidebar = document.querySelector(".fa-xmark")



// sidebar start

openSidebar.addEventListener("click", () => {
    sidebar.style.display = "flex"
})
closeSidebar.addEventListener("click", () => {
    sidebar.style.display = "none"
})
//sidebar end