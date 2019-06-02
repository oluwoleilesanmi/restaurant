const createBtn = (name, id) => {
  const btn = document.createElement("button");
  btn.innerHTML = name;
  btn.id = id;
  return btn;
};

const navigation = () => {
  const nav = document.createElement("div");
  nav.appendChild(createBtn("Home", "home-nav"));
  nav.appendChild(createBtn("Menu", "menu-nav"));
  nav.appendChild(createBtn("Contact", "contact-nav"));
  return nav;
};

export { navigation };
