const contact = contentDiv => {
  const page = document.createElement("div");
  page.className = "innerDiv";
  page.appendChild(title());
  page.appendChild(address());
  page.appendChild(phone());
  page.appendChild(email());
  contentDiv.appendChild(page);
};

let title = () => {
  const title = document.createElement("h2");
  title.innerHTML = "Reach-out to Us";
  return title;
};

let phone = () => {
  const phone = document.createElement("p");
  phone.innerHTML = "123-533-789";
  return phone;
};

let address = () => {
  const address = document.createElement("p");
  address.innerHTML = "Fatoyibo street ikoyi lagos Nigeria";
  return address;
};

let email = () => {
  const email = document.createElement("p");
  email.innerHTML = "007@gmail.com";
  return email;
};
export { contact };
