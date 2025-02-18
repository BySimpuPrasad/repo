function searchData(e) {
  window.location.href = `https://www.google.com/search?q=${search.value}`
}

function checkEnter(event) {
  console.log(event.key);
  if(event.key == "Enter"){
    searchData();
  }
}