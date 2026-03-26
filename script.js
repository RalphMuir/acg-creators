let creators = [
  {
    name: "Huang Yan",
    avatar: "images/huang.jpg",
    mainImage: "images/huang-main.jpg",
    tags: ["#插畫", "#光影"],
    desc: "擅長光影氛圍的插畫創作者",
    gallery: [
      "images/huang-1.jpg",
      "images/huang-2.jpg"
    ],
    link: "https://huangyan9786.weebly.com/"
  },
  {
    name: "Mizuki",
    avatar: "images/mizuki.jpg",
    mainImage: "images/mizuki-main.jpg",
    tags: ["#VTuber"],
    desc: "可愛系角色創作者",
    gallery: [
      "images/mizuki-1.jpg"
    ],
    link: "#"
  }
];

const list = document.getElementById("creatorList");

function renderList() {
  list.innerHTML = "";

  creators.forEach((c, i) => {
    const el = document.createElement("div");
    el.className = "creator";
    el.dataset.index = i;

    el.innerHTML = `
      <img src="${c.avatar}">
      <div>
        <div>${c.name}</div>
        <small>${c.tags.join(" ")}</small>
      </div>
    `;

    el.addEventListener("click", () => {
      selectCreator(i);
    });

    list.appendChild(el);
  });
}

function selectCreator(index) {
  const c = creators[index];

  // 🔥 左側更新
  document.getElementById("mainImage").src = c.mainImage;
  document.getElementById("name").textContent = c.name;
  document.getElementById("desc").textContent = c.desc;
  document.getElementById("link").href = c.link;

  document.getElementById("tags").innerHTML =
    c.tags.map(t => `<span>${t}</span>`).join("");

  // gallery
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  c.gallery.forEach(img => {
    const g = document.createElement("img");
    g.src = img;

    g.addEventListener("click", () => {
      document.getElementById("mainImage").src = img;
    });

    gallery.appendChild(g);
  });

  // 🔥 Active UI
  document.querySelectorAll(".creator").forEach(el => {
    el.classList.remove("active");
  });

  document.querySelector(`[data-index="${index}"]`)
    .classList.add("active");
}

renderList();
selectCreator(0);