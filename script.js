let creators = [
  {
    name: "Huang Yan",
    avatar: "images/huang.jpg",
    mainImage: "images/huang-main.jpg",
    tags: ["插畫"],
    desc: "光影系插畫創作者",
    gallery: ["images/huang-1.jpg", "images/huang-2.jpg"],
    link: "https://huangyan9786.weebly.com/"
  },
  {
    name: "Mizuki",
    avatar: "images/mizuki.jpg",
    mainImage: "images/mizuki-main.jpg",
    tags: ["VTuber"],
    desc: "VTuber角色創作者",
    gallery: ["images/mizuki-1.jpg"],
    link: "#"
  }
];

let currentTag = "all";

const list = document.getElementById("creatorList");

function renderList() {
  list.innerHTML = "";

  creators.forEach((c, i) => {

    if (currentTag !== "all" && !c.tags.includes(currentTag)) return;

    const el = document.createElement("div");
    el.className = "creator";
    el.dataset.index = i;

    el.innerHTML = `
      <img src="${c.avatar}">
      <div>
        <div>${c.name}</div>
        <small>${c.tags.join(", ")}</small>
      </div>
    `;

    el.onclick = () => selectCreator(i);

    list.appendChild(el);
  });
}

function selectCreator(i) {
  const c = creators[i];

  mainImage.src = c.mainImage;
  name.textContent = c.name;
  desc.textContent = c.desc;
  link.href = c.link;

  tags.innerHTML = c.tags.map(t => `<span>${t}</span>`).join("");

  gallery.innerHTML = "";

  c.gallery.forEach(img => {
    const g = document.createElement("img");
    g.src = img;
    g.onclick = () => mainImage.src = img;
    gallery.appendChild(g);
  });

  document.querySelectorAll(".creator").forEach(e => e.classList.remove("active"));
  document.querySelector(`[data-index="${i}"]`)?.classList.add("active");
}

/* 搜尋 */
document.getElementById("search").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();

  document.querySelectorAll(".creator").forEach(el => {
    el.style.display = el.innerText.toLowerCase().includes(val) ? "flex" : "none";
  });
});

/* Tag */
document.querySelectorAll(".tag-filter button").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".tag-filter button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    currentTag = btn.dataset.tag;
    renderList();
  };
});

renderList();
selectCreator(0);
