let settingBox = document.querySelector('.settingBox');
let bgColor = "url('https://wallpaper.forfun.com/fetch/6c/6c5d2a23a84889f93b7a5cc8da42f122.jpeg?w=1470')";


let wallpaperLocal = localStorage.getItem('betterwallpaper') || bgColor;

function setWallpaperAuto() {
  if (wallpaperLocal == bgColor) {
    document.body.style.background = wallpaperLocal;
  }
  else {
    document.body.style.background = `url('${wallpaperLocal}')`;
  }
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
  let url = prompt('ENTER url OR -0');
  if (url == null) { return; }
  if (url != "0") {
    document.body.style.background = ` ${bgColor} url('${url}')`;
  }
  else {
    document.body.style.background = bgColor;
    url = bgColor;
  }
  localStorage.setItem('betterwallpaper', url);
}