// GETTING FROM LOCAL STORAGE
let body_background = localStorage.getItem('local_background');
let body_background_position = localStorage.getItem('local_background_position');
let color_for_text = localStorage.getItem('colorForText');
let color_for_elem = localStorage.getItem('colorForElem');
let local_links_data = localStorage.getItem('LinksData940');

// GETTING ELEMENTS
let link_list = document.getElementById('link_list');
let settingBar = document.querySelector('.settingBar');
let searchBar = document.getElementById('search-input');
let cssroot = document.querySelector(':root');


//Auto implement locals
function implementLocals() {
  //set background
  if (body_background === null) {}
  else { document.body.style.background = body_background; }

  //set background position 
  if (body_background_position === null) {}
  else { document.body.style.backgroundPosition = body_background_position; }

  //set color for text
  if (color_for_text === null) {}
  else { cssroot.style.setProperty('--colorText', color_for_text); }

  //set color for element
  if (color_for_elem === null) {}
  else { cssroot.style.setProperty('--elemColor', color_for_elem); }

  // set loaded link data
  if (local_links_data === null) {}
  else {
    link_list.innerHTML = local_links_data;
  }
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


//Changing Background
function backgroundChange() {
  let url = prompt("set url('__'), color or default");
  if (url == null) { return; }
  else if (url == "default") {
    localStorage.removeItem('local_background');
    reloadTheAlert();
  }
  else {
    localStorage.setItem('local_background', url);
    reloadTheAlert();
  }
}

function setBackgroundPosition() {
  let position = prompt('set position');
  if (position === null) { return; }
  else {
    localStorage.setItem('local_background_position', position);
    reloadTheAlert();
  }
}


//Change element colors
function setTxtColor() {
  let color = prompt('set color to text:');
  if (color === null) { return; }
  else {
    localStorage.setItem('colorForText', color);
    reloadTheAlert();
  }
}

function setElemColor() {
  let color = prompt('set color to element:');
  if (color === null) { return; }
  else {
    localStorage.setItem('colorForElem', color);
    reloadTheAlert();
  }
}


//Adding Shortcut
function addLinks() {
  let product;
  let name = prompt('site name:');
  if (name === null) { return; }
  let url = prompt('site url');
  if (url === null || name === null || url === "" || name === "") {
    return;
  }
  product = `<span href=""><a href="${url}">${name}</a><i class="fa fa-close" onclick="this.parentElement.remove();"></i></span>`;
  link_list.innerHTML += product;
  updateLinkstoLocal();
}


//Remove Shortcuts
function removeShortcuts() {
  link_list.classList.add('on');
}

function linkListDone() {
  link_list.classList.remove('on');
  updateLinkstoLocal();
}

//Update links to local
function updateLinkstoLocal() {
  localStorage.setItem('LinksData940', link_list.innerHTML);
}