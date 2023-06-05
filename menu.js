const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./Photo_menu/item-1.jpeg",
    desc: `[blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank]`,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./Photo_menu/item-2.jpeg",
    desc: `[blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank]`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./Photo_menu/item-3.jpeg",
    desc: `[blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank]`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./Photo_menu/item-4.jpeg",
    desc: `[blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank]`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./Photo_menu/item-5.jpeg",
    desc: `[blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank]`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./Photo_menu/item-6.jpeg",
    desc: `[blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank]`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./Photo_menu/item-7.jpeg",
    desc: `[blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank]`,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./Photo_menu/item-8.jpeg",
    desc: `[blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank]`,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./Photo_menu/item-9.jpeg",
    desc: `[blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank]`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./Photo_menu/item-10.jpeg",
    desc: `[blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank][blank]`,
  },
];

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayCategoryItems();
});

const sectionElement = document.querySelector(".section-center");
const categoryElement = document.querySelector(".btn-container");

function displayMenuItems(menuList) {
  let sectionContent = "";

  menuList.forEach((item) => {
    sectionContent += `<article class="menu-item">
        <img src=${item.img} alt="menu item" class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
  });
  sectionElement.innerHTML = sectionContent;
}

function displayCategoryItems() {
  let categories = [];
  let categoryContent = `<button type="button" class="filter-btn" data-id="all">all</button>`;

  menu.forEach((item) => {
    const foodIndex = categories.indexOf(item.category);
    if (foodIndex === -1) {
      categories.push(item.category);
    }
  });

  categories.forEach((category) => {
    categoryContent += `<button type="button" class="filter-btn" data-id="${category}">${category}</button>`;
  });

  categoryElement.innerHTML = categoryContent;

  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const selectedCategoryName = e.target.getAttribute("data-id");
      const filteredMenu = menu.filter(
        (item) => item.category === selectedCategoryName
      );

      console.log("selectedCategoryName: " + selectedCategoryName);

      if (selectedCategoryName === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(filteredMenu);
      }
    });
  });
}
