function checkifpass(button) {
  const movieData = button.closest('.movieData');
  const passwordInput = movieData.querySelector('.passfield input');
  const contOutput = movieData.querySelector('.contOutput');
  const orText = movieData.querySelector('.orText');
  const enteredPassword = passwordInput.value;
  const correctPassword = button.value;

  if (enteredPassword === correctPassword) {
    contOutput.classList.add('unlock');
    orText.innerHTML = "or";
    orText.style.color = "";
  } else {
    orText.innerHTML = "Wrong Password! Watch Video!";
    orText.style.color = "gold";
    orText.style.padding = "5px 0px";
  }
}

function FetchBata(e) {
  let searchQuery = e.value.toLowerCase(); // Get the search query and convert to lowercase
  let items = document.querySelectorAll('.movieData .movieHeading'); // Get all list items

  items.forEach(function(item) {
    let itemName = item.textContent.toLowerCase(); // Get the text content of each item and convert to lowercase

    // Show or hide the item based on whether it matches the search query
    if (itemName.includes(searchQuery)) {
      item.parentElement.style.display = ''; // Show the item
    } else {
      item.parentElement.style.display = 'none'; // Hide the item
    }
  });
}