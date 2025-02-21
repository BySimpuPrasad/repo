// Variables
let newWallpaperArray = ["", "", "", ""];
const pageSpecificKeys = ['local_background', 'local_background_position', 'colorForText', 'colorForElem', 'LinksData940', 'localRandomWallpaper', 'local_randomWallpaper_is'];


// GETTING FROM LOCAL STORAGE
let body_background = localStorage.getItem('local_background');
let body_background_position = localStorage.getItem('local_background_position');
let color_for_text = localStorage.getItem('colorForText');
let color_for_elem = localStorage.getItem('colorForElem');
let local_links_data = localStorage.getItem('LinksData940');
let local_randomWallpaper = localStorage.getItem('localRandomWallpaper');
let randomWallpaperIs = localStorage.getItem('local_randomWallpaper_is') || 0;


// GETTING ELEMENTS
let link_list = document.getElementById('link_list');
let settingBar = document.querySelector('.settingBar');
let searchBar = document.getElementById('search-input');
let cssroot = document.querySelector(':root');
let randomWallpaperBTN = document.getElementById('randomWallpaperBTn');


//Auto implement locals
function implementLocals() {
  //set background
  if (body_background == null || randomWallpaperIs == 1) {}
  else { document.body.style.background = body_background; }

  //set color for text
  if (color_for_text == null) {}
  else { cssroot.style.setProperty('--colorText', color_for_text); }

  //set color for element
  if (color_for_elem == null) {}
  else { cssroot.style.setProperty('--elemColor', color_for_elem); }

  // set loaded link data
  if (local_links_data == null) {}
  else {
    link_list.innerHTML = local_links_data;
  }

  //set random wallpapers if not available
  if (local_randomWallpaper == null && randomWallpaperIs == 1) { setTimeout(() => { alert('please first set random wallpapers!'); }, 1000); }

  // set random wallpapers
  if (local_randomWallpaper == null || randomWallpaperIs == 0) {}
  else {
    let wallx = local_randomWallpaper.split(",");
    let randomNumber = Math.floor(Math.random() * wallx.length);
    document.body.style.background = wallx[randomNumber];
  }

  // check random wallpaper on-off
  if (randomWallpaperIs == 0) { randomWallpaperBTN.innerHTML = "random wallpaper is off"; }
  else { randomWallpaperBTN.innerHTML = "random wallpaper is on"; }

  //set background position 
  if (body_background_position == null) {}
  else { document.body.style.backgroundPosition = body_background_position; }

}

implementLocals();


// Reload the alert
function reloadTheAlert() {
  setTimeout(()=>{
    alert('reload the page to see changes!');
  },500);
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
  if (position == null) { return; }
  else {
    localStorage.setItem('local_background_position', position);
    reloadTheAlert();
  }
}


// Set Random Wallpapers
function setRandomWallpapers() {
  newWallpaperArray.forEach((wall, index) => {
    let newWall = prompt('wall');
    if (newWall == "" || newWall == null) { newWallpaperArray[index] = "#000"; }
    else { newWallpaperArray[index] = newWall; }
  });
  localStorage.setItem('localRandomWallpaper', newWallpaperArray);
}


//Change element colors
function setTxtColor() {
  let color = prompt('set color to text:');
  if (color == null) { return; }
  else {
    localStorage.setItem('colorForText', color);
    reloadTheAlert();
  }
}

function setElemColor() {
  let color = prompt('set color to element:');
  if (color == null) { return; }
  else {
    localStorage.setItem('colorForElem', color);
    reloadTheAlert();
  }
}


//Adding Shortcut
function addLinks() {
  let product;
  let name = prompt('site name:');
  if (name == null) { return; }
  let url = prompt('site url');
  if (url == null || name == null || url == "" || name == "") {
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

//Random wallpaper is on-off
function onOffRandomWallpaper(e) {
  if (randomWallpaperIs == 0) { localStorage.setItem('local_randomWallpaper_is', 1); }
  else { localStorage.setItem('local_randomWallpaper_is', 0); }
  reloadTheAlert();
}

// Reset all localStorage
function clearAllLocalStorage() {
  let pass = Math.floor(Math.random() * (99999 - 11111 + 1))+ 11111;
  let askpass = prompt(`enter ${pass} to reset:`);
  if (askpass == null) { return; }
  else if (askpass != pass) { alert('wrong pass-key retry!'); }
  else {
    pageSpecificKeys.forEach(key => localStorage.removeItem(key));
    alert('clared \n reload the page once!')
  }
}