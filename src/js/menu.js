import { meals } from "./constants";

const menu = contentDiv => {
  const page = document.createElement("div");
  page.className = "innerDiv";
  page.appendChild(title());
  page.appendChild(populateUl());
  contentDiv.appendChild(page);
};

const populateUl = () => {
  let ul = document.createElement("ul"), li = null, index;
  for (index = 0; index < meals.length; index++) {
    li = document.createElement("li");
    li.innerHTML = meals[index];
    ul.appendChild(li);
  }
  return ul;
};

const title = () => {
  const title = document.createElement("h2");
  title.innerHTML = "Meals";
  return title;
};

export { menu };
