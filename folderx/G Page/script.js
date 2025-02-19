let settingBox = document.querySelector('.settingBox');
let cssroot = document.querySelector(':root');

let wallpaperLocal = localStorage.getItem('betterwallpaper') || 0;
let colorBG = localStorage.getItem('color1') || "#ffffff20";
let colortxts = localStorage.getItem('color2') || "#fff";

function setWallpaperAuto() {
  cssroot.style.setProperty('--lightColor', colorBG);
  cssroot.style.setProperty('--colortxt', colortxts);
  if (wallpaperLocal == 0) return;
  document.body.style.background = wallpaperLocal;
}
setWallpaperAuto();

function searchData(e) {
  window.location.href = `https://www.google.com/search?q=${search.value}`
}

function checkEnter(event) {
  console.log(event.key);
  if (event.key == "Enter") {
    searchData();
  }
}

function launchSetting() {
  settingBox.classList.toggle('on');
}

function changeWallpaper() {
  let url = prompt(`ENTER url('___') OR -0`);
  if (url == null) { return; }
  if (url == "0") { localStorage.removeItem('betterwallpaper'); alert('road the page to see changes!'); return; }
  document.body.style.background = url;
  localStorage.setItem('betterwallpaper', url);
}

function setColor(e) {
  if (e == 1) {
    let color = prompt('BG COLOR');
    cssroot.style.setProperty('--lightColor', color);
    localStorage.setItem('color1', color);
  }
  else if (e == 2) {
    let color = prompt('TEXT COLOR');
    cssroot.style.setProperty('--colortxt', color);
    localStorage.setItem('color2', color);
  }
}