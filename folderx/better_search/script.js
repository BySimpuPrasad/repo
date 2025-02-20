// GETTING FROM LOCAL STORAGE
let body_background = localStorage.getItem('local_background');


// GETTING ELEMENTS
let link_list = document.getElementById('link_list');
let settingBar = document.querySelector('.settingBar');
let searchBar = document.getElementById('search-input');


//Auto implement locals
function implementLocals() {

  //set background
  if (body_background === null) {}
  else { document.body.style.background = body_background; }


}

implementLocals();

// Reload the alert
function reloadTheAlert() {
  alert('reload the page to see changes!');
}

//Showing Setting Bar
function showSetting() {
  settingBar.classList.toggle('show');
}


//Searching Data
function searchData(e) {
  window.location.href = `https://www.google.com/search?q=${searchBar.value}`
}

function checkEnter(event) {
  console.log(event.key);
  if (event.key == "Enter") {
    searchData();
  }
}


//Adding Shortcut
function addLinks() {
  let product;
  let name = prompt('site name:');
  let url = prompt('site url');
  if (url === null || name === null || url === "" || name === "") {
    return;
  }
  product = `<span href=""><a href="${url}">${name}</a><i class="fa fa-close" onclick="this.parentElement.remove();"></i></span>`;
  link_list.innerHTML += product;
}


//Remove Shortcuts
function removeShortcuts() {
  link_list.classList.add('on');
}

function linkListDone() {
  link_list.classList.remove('on');
}

//Changing Background
function backgroundChange() {
  let url = prompt("set url('__'), color or default");
  if (url == null) { return; }
  else if (url == "default") { localStorage.removeItem('local_background'); reloadTheAlert();}
  else {
    localStorage.setItem('local_background', url);
    reloadTheAlert();
  }
}