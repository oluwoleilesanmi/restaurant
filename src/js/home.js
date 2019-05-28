const home = contentDiv => {
  const page = document.createElement("div");
  page.className = "innerDiv";
  const title = document.createElement("h1");
  title.innerHTML = "Olu's Restaurant";
  const history = document.createElement("p");
  history.innerHTML = "Here for you since the 80's";
  const picture = document.createElement("img");
  picture.src = "./images/restaurant.jpg";
  page.appendChild(title);
  page.appendChild(picture);
  page.appendChild(history);
  contentDiv.appendChild(page);
};

export { home };
