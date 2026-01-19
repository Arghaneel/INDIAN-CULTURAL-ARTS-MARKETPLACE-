function openCategory(category) {
  window.location.href = `category.html?type=${category}`;
}

const data = {
  madhubani: [
    { name: "Radha Krishna Painting", img: "rd.webp" },
    { name: "Peacock Madhubani", img: "pp.webp" }
  ],
  warli: [
    { name: "Village Life Warli", img: "vv.webp" },
    { name: "Warli Dance Art", img: "dd.webp" }
  ],
  pattachitra: [
    { name: "Jagannath Pattachitra", img: "jj.webp" }
  ],
  kalamkari: [
    { name: "Mythology Kalamkari", img: "mm.webp" }
  ]
};

const params = new URLSearchParams(window.location.search);
const type = params.get("type");

if (type && data[type]) {
  document.getElementById("category-title").innerText =
    type.toUpperCase() + " ART";

  const container = document.getElementById("art-list");

  data[type].forEach(item => {
    container.innerHTML += `
      <div class="card image-card">
        <img src="${item.img}">
        <h3>${item.name}</h3>
      </div>
    `;
  });
}
// Load Categories
fetch("/api/categories")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("categories");
    data.forEach(cat => {
      container.innerHTML += `
        <div class="card">
          <img src="${cat.image}">
          <h3>${cat.name}</h3>
        </div>
      `;
    });
  });

// Load Products
fetch("/api/products")
  .then(res => res.json())
  .then(data => {
    console.log("Products:", data);
  });
