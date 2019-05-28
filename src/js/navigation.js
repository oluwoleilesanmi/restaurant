const createBtn = (name, id) => {
  const btn = document.createElement("button");
  btn.innerHTML = name;
  btn.id = id;
  return btn;
};

const navigation = () => {
  const nav = document.createElement("div");
  const homeNav = createBtn("Home", "home-nav");
  const menuNav = createBtn("Menu", "menu-nav");
  const contactNav = createBtn("Contact", "contact-nav");
  nav.appendChild(homeNav);
  nav.appendChild(menuNav);
  nav.appendChild(contactNav);
  return nav;
};

export { navigation };
