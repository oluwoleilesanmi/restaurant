const contact = contentDiv => {
  const page = document.createElement("div");
  page.className = "innerDiv";
  const title = document.createElement("h2");
  title.innerHTML = "Reach-out to Us";
  const phone = document.createElement("p");
  phone.innerHTML = "123-533-789";
  const address = document.createElement("p");
  address.innerHTML = "Fatoyibo street ikoyi lagos Nigeria";
  const email = document.createElement("p");
  email.innerHTML = "007@gmail.com";
  page.appendChild(title);
  page.appendChild(address);
  page.appendChild(phone);
  page.appendChild(email);
  contentDiv.appendChild(page);
};

export { contact };
