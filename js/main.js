const API__PRODUCTS = "https://dummyjson.com"

const openSidebar = document.querySelector(".navbar__burger")
const sidebar = document.querySelector(".navbar__sidebar")
const closeSidebar = document.querySelector(".fa-xmark")
const wrapper = document.querySelector(".special__wrapper")
const moreBtn = document.querySelector(".special__btn")



// sidebar start

openSidebar.addEventListener("click", () => {
    sidebar.style.display = "flex"
})
closeSidebar.addEventListener("click", () => {
    sidebar.style.display = "none"
})
//sidebar end




// card start

let perPageCount = 6
let offset = 1
let categoryValue = ""

async function fetchProduct(api, limit, category) {
    try {
        let response = await fetch(`${api}/products${category}?limit=${limit}`)
       console.log(response);
        response
                .json()
                .then((res) => createCard(res))
                .catch((err) => console.log(err))
    } catch (error) {
        console.log("error");
    }
}
fetchProduct(API__PRODUCTS, perPageCount, "")

function createCard(data) {
    data.products.forEach((product) => {
        // console.log(data);
        console.log(product);
        let card = document.createElement("div")
        card.classList.add("special__card")
        console.log(card);
        card.innerHTML = `
            <div class="special__card__img">
                <img src="${product.thumbnail}" alt="">
            </div>
            <div class="special__card__content">
                <h3 class="special__card__title" title="${product.title}">${product.title}</h3>
                <span>${product.price}</span>
                <p>${product.category}</p>
            </div>

        `

        wrapper.appendChild(card)
    }
);
}
moreBtn.addEventListener("click", ()=> {
    offset++
    fetchProduct(API__PRODUCTS, perPageCount * offset, categoryValue)
})
