
function copytext() {
  let x = window.location.href;
  navigator.clipboard.writeText(x);
  alert('Url Copied!');
}

function searchHere(e) {
  let searchQuery = e.value.toLowerCase(); // Get the search query and convert to lowercase
  let items = document.querySelectorAll('#dataHolder div div h3'); // Get all list items

  items.forEach(function(item) {
    let itemName = item.textContent.toLowerCase(); // Get the text content of each item and convert to lowercase

    // Show or hide the item based on whether it matches the search query
    if (itemName.includes(searchQuery)) {
      item.parentElement.parentElement.style.display = ''; // Show the item
    } else {
      item.parentElement.parentElement.style.display = 'none'; // Hide the item
    }
  });
}

