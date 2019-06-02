const home = contentDiv => {
  const page = document.createElement("div");
  page.className = "innerDiv";
  page.appendChild(title());
  page.appendChild(picture());
  page.appendChild(history());
  contentDiv.appendChild(page);
};

const title = () => {
  const title = document.createElement("h1");
  title.innerHTML = "Olu's Restaurant";
  return title;
};

const history = () => {
  const history = document.createElement("p");
  history.innerHTML = "Here for you since the 80's";
  return history;
};

const picture = () => {
  const picture = document.createElement("img");
  picture.src = "./images/restaurant.jpg";
  return picture;
};

export { home };
