let settingBox = document.querySelector('.settingBox');


let wallpaperLocal = localStorage.getItem('betterwallpaper') || 0;

function setWallpaperAuto() {
  if(wallpaperLocal == 0 ) return;
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
  if (url == "0") { localStorage.removeItem('betterwallpaper'); return;}
  document.body.style.background = url;
  localStorage.setItem('betterwallpaper', url);
}