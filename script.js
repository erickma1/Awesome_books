// Checking if local storage is empty then add an empty array
if (localStorage.getItem("Added Books") == null) {
    localStorage.setItem("Added Books", JSON.stringify([]));
  }
  
  // store data into local storage
  const storeData = JSON.parse(localStorage.getItem("Added Books"));
  
  function updateData() {
    localStorage.setItem("Added Books", JSON.stringify(storeData));
  }
  
  // Getting values from input fields
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    const title = document.querySelector(".title");
    const author = document.querySelector(".author");
    e.preventDefault();
    addNewdata(title.value, author.value);
  });
  
  function createBooks(arr) {
    let books = "";
    for (let i = 0; i < arr.length; i += 1) {
      books += `
          ${arr[i].title}<br>
          ${arr[i].author}<br>
          <button onclick="removeBook('${i}')">Remove</button>
          <hr/>
          `;
    }
    return books;
  }
  